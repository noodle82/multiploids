import {newState,confirmIdentity,factsFor,recordPractice} from './learning.js';
import {ensureFleet} from './rockets.js';
import {ITEMS,grantRainbowSuit} from './wardrobe.js';
import {initialiseBadgeNotices} from './badge-notices.js';

// A disclosed convenience gate, never an identity or personal-data safeguard.
export const acceptsReviewCode = code => String(code).trim()==='773011';
export function createReviewState(){
 const state=newState(),p=state.profiles[0];
 state.profiles=[p];p.name='App Review demo';
 confirmIdentity(p,{name:'Nova',species:'orbit',voice:'heart2'});
 for(const mode of ['power','cargo','bridge','test'])for(const fact of factsFor([2]))recordPractice(p,fact,mode,{correct:true});
 p.species='blob';p.palName='Your Multiploid';p.mission.locks={};p.mission.claimed={};
 p.coins=500;p.rainbowUnlocked=true;
 p.owned=Object.values(ITEMS).flat().map(item=>item.id);grantRainbowSuit(p);
 ensureFleet(p);initialiseBadgeNotices(p);p.mission.badgeNoticeLevel=6;p.mission.pendingBadges=[];
 return state;
}
