import {badgeCount,claimClothes,buyItem,equipItem,chooseFeature} from './learning.js';
import {ITEMS,SHOP,EYE_COLOURS,itemById,wardrobeItems,weeklyReward} from './wardrobe.js';
import {BODY_COLOURS,CATEGORY_NAMES,ANTENNAE,ensureCollection,availableColours,nextCollectionReward,COLLECTION_REWARDS} from './collection-rewards.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function itemAccess(p,category,id){
 if(id===null)return {allowed:!!ITEMS[category],label:'Take off'};
 if(!itemById(category,id))return {allowed:false,label:'Unavailable'};
 if(p.owned.includes(id))return {allowed:true,label:'In your collection'};
 const reward=COLLECTION_REWARDS.find(r=>r.id===id);if(reward)return {allowed:false,label:'Unlocks at '+reward.at+' questions'};
 const shop=SHOP.find(s=>s.id===id);if(shop)return {allowed:p.coins>=shop.cost,label:shop.cost+' star sparks',shop:true};
 const level=badgeCount(p),required=['hat','coat'].includes(category)?4:5;
 return {allowed:id!=='coat-rainbow'&&!id?.startsWith('weekly-')&&level>=required&&!p.mission.claimed[category],label:'Badge '+required+' choice',claim:true};
}
export function previewLook(p,look={}){return {...p,...(look.colour?{colour:look.colour}:{}),...(look.antennae?{antennae:look.antennae}:{}),...(look.eyeColour?{eyeColour:look.eyeColour}:{}),wearing:{...p.wearing,...look.wearing}};}
export function commitLook(p,look){
 if(p.species==='blob')return false;
 const copy=structuredClone(p);
 for(const key of ['colour','antennae'])if(look[key]&&!chooseFeature(copy,key,look[key]))return false;
 if(look.eyeColour){if(!EYE_COLOURS[look.eyeColour])return false;copy.eyeColour=look.eyeColour;}
 for(const [category,id]of Object.entries(look.wearing||{})){
  const access=itemAccess(copy,category,id);if(!access.allowed)return false;
  if(id!==null&&!copy.owned.includes(id)){if(access.shop){if(!buyItem(copy,id))return false;}else if(!claimClothes(copy,category,id))return false;}
  if(!equipItem(copy,category,id))return false;
 }
 Object.assign(p,copy);return true;
}
export function closetView(p,{creature,look={},tab='colour',resume=false}){
 const c=ensureCollection(p),next=nextCollectionReward(p),weekly=weeklyReward(p),preview=previewLook(p,look),pending=Object.keys(look).length>0;
 const tabs=[['colour','Colours'],['antennae','Antennae'],['eyes','Eyes'],...Object.entries(CATEGORY_NAMES)];
 const button=(key,value,label,swatch,status,selected)=>`<button class="closet-option ${selected?'selected':''}" data-look-kind="${key}" data-look-value="${esc(value===null?'none':value)}" ${status.allowed?'':'disabled'} aria-pressed="${!!selected}"><i style="background:${swatch}">${key==='hat'?'△':key==='glasses'?'◎':key==='earrings'?'◇':key==='shoes'?'⌁':key==='gloves'?'✋':key==='coat'?'✦':''}</i><strong>${esc(label)}</strong><small>${esc(status.label)}</small></button>`;
 let choices='';
 if(tab==='colour')choices=Object.entries(BODY_COLOURS).map(([id,colour])=>button('colour',id,id[0].toUpperCase()+id.slice(1),colour,{allowed:availableColours(p).includes(id),label:availableColours(p).includes(id)?'Yours to change':BASE_LABEL(id)},preview.colour===id)).join('')+(p.rainbowUnlocked?button('colour','rainbow','Rainbow','linear-gradient(120deg,#ff244b,#ffda16,#19c857,#04bcea,#b425ed)',{allowed:true,label:'Rainbow explorer'},preview.colour==='rainbow'):'');
 else if(tab==='antennae')choices=ANTENNAE.map(id=>button('antennae',id,id==='none'?'Smooth & simple':id,'#8896bc',{allowed:!!c.antennaeBadge,label:c.antennaeBadge?'Yours to change':'Earn badge 3'},preview.antennae===id)).join('');
 else if(tab==='eyes')choices=Object.entries(EYE_COLOURS).map(([id,colour])=>button('eyeColour',id,id,colour,{allowed:true,label:'Eye colour'},preview.eyeColour===id)).join('');
 else{
  const all=wardrobeItems(p)[tab]||[],owned=all.filter(i=>p.owned.includes(i.id)),available=all.filter(i=>!p.owned.includes(i.id)&&itemAccess(p,tab,i.id).allowed),later=all.filter(i=>!p.owned.includes(i.id)&&!itemAccess(p,tab,i.id).allowed).slice(0,3);
  choices=button(tab,null,'Take off','#202c44',{allowed:true,label:'No '+(tab==='coat'?'suit':CATEGORY_NAMES[tab]?.toLowerCase())},!preview.wearing[tab])+[...owned,...available,...later].map(i=>button(tab,i.id,i.label,i.pattern==='rainbow'?'linear-gradient(120deg,#ff244b,#ffda16,#19c857,#04bcea,#b425ed)':i.colour,itemAccess(p,tab,i.id),preview.wearing[tab]===i.id)).join('');
 }
 return `<section class="page-intro"><div><span class="eyebrow">YOUR LOOK · YOUR GROWING COLLECTION</span><h1>${p.species==='blob'?'Your little beginning.':esc(p.palName)+'’s wardrobe.'}</h1><p>Try things on, then keep your look. Earned colours and accessories can be changed any time.</p></div><button class="secondary" ${resume?'id="resume-round"':'data-go="home"'}>${resume?'Back to my round':'Back to Mission Control'} →</button></section><div class="closet-layout"><aside class="closet-preview"><div class="closet-model">${creature(preview)}</div><h2>${esc(p.palName)}</h2><p>${pending?'Trying it on · not saved yet':'Your current look'}</p>${p.species==='blob'?'<button class="primary" id="make-creature">Name, shape & voice →</button>':`<div class="closet-confirm"><button class="primary" id="keep-look" ${!pending?'disabled':''}>Keep this look ✓</button><button class="secondary" id="cancel-look" ${!pending?'disabled':''}>Cancel try-on</button></div><button class="text-button" id="dance">A little dance ♫</button>`}</aside><section class="closet-collection">${p.species==='blob'?'<article class="choice-card"><h2>Let’s meet your Multiploid.</h2><p>Choose a name, shape and voice first. Your earned collection stays yours.</p></article>':`<div class="closet-tabs" role="group" aria-label="Customisation categories">${tabs.map(([id,label])=>`<button class="small-button ${tab===id?'selected':''}" data-closet-tab="${id}" aria-pressed="${tab===id}">${label}</button>`).join('')}</div><div class="closet-options">${choices}</div>`}<article class="choice-card journey-card"><span class="eyebrow">YOUR COLLECTION JOURNEY · ${c.total} QUESTIONS</span><h2>${next?'Next: '+esc(next.label):'Your special collection is complete!'}</h2><p>${next?Math.max(0,next.at-c.total)+' more questions. A different fact or activity counts once each day; trying again tomorrow counts too.':'Keep coming back for a different weekly space suit.'}</p>${next?`<progress max="${next.at}" value="${c.total}" aria-label="Next collection reward"></progress>`:''}<p>Collected rewards stay yours across missions.</p></article><article class="choice-card weekly-suit"><span class="eyebrow">THIS WEEK’S SPECIAL SUIT</span><h2>${esc(weekly.suit.label.split(' · ')[0])}</h2><progress max="20" value="${weekly.count}" aria-label="Weekly suit progress"></progress><p>${weekly.owned?'In your Space suits collection':weekly.count+' / 20 different questions this week'}</p>${weekly.ready&&!weekly.owned&&p.species!=='blob'?'<button class="primary" id="collect-weekly">Add suit to my collection ✦</button>':''}<small>Earned suits can be tried on or taken off in Space suits.</small></article></section></div>`;
}
function BASE_LABEL(id){const r=COLLECTION_REWARDS.find(r=>r.kind==='colour'&&r.id===id);return r?'Unlocks at '+r.at+' questions':'Earn your body colour badge';}
