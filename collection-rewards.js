import {ITEMS} from './wardrobe.js';
export const BODY_COLOURS={mint:'#8ecfc2',lilac:'#b8a1df',peach:'#efa997',blue:'#8fbbe2',rose:'#e8a2ca',aqua:'#7dced0',lemon:'#e9d38c',coral:'#ff797b',berry:'#ba66cf',gold:'#f1bc36',moon:'#d1d8ed',teal:'#13a9a1',indigo:'#6260cf',orange:'#ff9e3d',lime:'#9fd748',cherry:'#e74b73',cosmic:'#7b40cc',ice:'#b2edf2'};
export const BASE_COLOURS=Object.keys(BODY_COLOURS).slice(0,7);
export const ANTENNAE=['none','radar','satellite','bolts'];
const labels={hat:'Hats',coat:'Space suits',shoes:'Boots',glasses:'Scanners',gloves:'Gloves',earrings:'Space jewels'};
export const CATEGORY_NAMES=labels;
const extra={
 hat:[['Aurora bobble hat','beanie','#44bca8'],['Solar crown','crown','#f2c447'],['Nebula headband','headband','#b787ed'],['Meteor helmet','helmet','#f07c82'],['Galaxy bobble hat','beanie','#7564d8'],['Starlight cone','party','#f3c7ed'],['Orbit captain cap','bucket','#50bdde'],['Cosmic crown','crown','#c795f3']],
 coat:[['Comet sparkle','flight','#ef7293','sparkle'],['Aurora flight suit','flight','#2eb9a5','aurora'],['Galaxy explorer','flight','#7552ca','galaxy'],['Solar glitter','flight','#f2a434','sparkle'],['Moonbeam shimmer','flight','#78bef2','aurora'],['Nebula flight suit','flight','#c660d4','galaxy'],['Meteor glitter','flight','#ec6b4d','sparkle'],['Deep space rainbow','flight','#ff244b','rainbow']],
 shoes:[['Meteor boots','boots','#f49151'],['Nebula slippers','slippers','#b988db'],['Lime thrusters','thruster','#b8dc54'],['Aurora trainers','trainers','#38bea9'],['Galaxy boots','boots','#7560cf'],['Rose moon slippers','slippers','#f09bca']],
 glasses:[['Solar star scanners','star','#f6bb3e'],['Aurora goggles','round','#2dbea7'],['Rose star scanners','star','#e86eaf'],['Lunar goggles','round','#9fbce8'],['Nebula scanners','star','#a77ae4'],['Comet goggles','round','#ff9159']],
 gloves:[['Moon mittens','mitten','#a8bce9'],['Solar gloves','mitten','#f1bd48'],['Aurora mittens','mitten','#48bea7'],['Nebula gloves','mitten','#b786df'],['Comet mittens','mitten','#ef927a'],['Rose space gloves','mitten','#e997c3']],
 earrings:[['Little moon drops','drop','#a7d8ef'],['Solar hoops','hoop','#f2be47'],['Aurora drops','drop','#43c9ab'],['Nebula hoops','hoop','#b182e5'],['Comet drops','drop','#f28b8d'],['Rose orbit hoops','hoop','#ed9fc4']]
};
// Interleave categories so the growing collection stays varied.
export const COLLECTION_REWARDS=[];
const colours=Object.keys(BODY_COLOURS).slice(7);let cursor=0;
for(let round=0;round<8;round++){
 if(colours[round])COLLECTION_REWARDS.push({kind:'colour',id:colours[round],label:colours[round]+' body colour'});
 for(const category of Object.keys(extra)){const data=extra[category][round];if(!data)continue;const [label,style,colour,pattern]=data,id='journey-'+category+'-'+round;const item={id,label,style,colour,...(pattern?{pattern,accent:['#6ee8d0','#ffabd8','#6198ed','#f97ae1','#b6a2ff','#43d1c7','#ffe86f','#a668fb'][round]}:{})};ITEMS[category]??=[];if(!ITEMS[category].some(i=>i.id===id))ITEMS[category].push(item);COLLECTION_REWARDS.push({kind:'item',id,category,label});}
}
for(const colour of colours.slice(8))COLLECTION_REWARDS.push({kind:'colour',id:colour,label:colour+' body colour'});
COLLECTION_REWARDS.forEach(r=>r.at=60+20*cursor++);
export function ensureCollection(p){
 p.collection??={total:(p.mission?.answers?.length||0)+(p.history||[]).reduce((n,h)=>n+(h.questions||0),0),day:'',keys:[],colours:[]};
 p.collection.colours??=[];p.collection.keys??=[];
 const level=p.mission?.started?[0,5,10,20,30,40].filter(n=>(p.mission.answers?.length||0)>=n).length:0;
 if(level>=2||p.mission?.locks?.colour||p.colour&&p.colour!=='grey')p.collection.colourBadge=true;
 if(level>=3||p.mission?.locks?.antennae||p.antennae&&p.antennae!=='none')p.collection.antennaeBadge=true;
 if(p.collection.colourBadge)p.collection.colours=[...new Set([...BASE_COLOURS,...p.collection.colours])];
 if(p.colour&&p.colour!=='grey'&&p.colour!=='rainbow'&&!p.collection.colours.includes(p.colour))p.collection.colours.push(p.colour);
 p.owned??=[];
 for(const reward of COLLECTION_REWARDS.filter(r=>r.at<=p.collection.total)){
  if(reward.kind==='colour'){if(!p.collection.colours.includes(reward.id))p.collection.colours.push(reward.id);}
  else if(!p.owned.includes(reward.id))p.owned.push(reward.id);
 }
 return p.collection;
}
const dayKey=d=>[d.getFullYear(),d.getMonth()+1,d.getDate()].join('-');
export function recordCollectionPractice(p,key,date=new Date()){
 const c=ensureCollection(p),day=dayKey(date);if(c.day!==day){c.day=day;c.keys=[];}
 if(c.keys.includes(key))return [];
 const before=c.total;c.keys.push(key);c.total++;ensureCollection(p);
 return COLLECTION_REWARDS.filter(r=>r.at>before&&r.at<=c.total);
}
export function availableColours(p){const c=ensureCollection(p);return [...new Set([...c.colours,...(p.rainbowUnlocked?['rainbow']:[])])];}
export function canChangeFeature(p,kind,value){const c=ensureCollection(p);return p.species!=='blob'&&(kind==='colour'?availableColours(p).includes(value):kind==='antennae'&&c.antennaeBadge&&[...ANTENNAE,'sprout','curly','floppy'].includes(value));}
export function nextCollectionReward(p){const c=ensureCollection(p);return COLLECTION_REWARDS.find(r=>r.at>c.total)||null;}
