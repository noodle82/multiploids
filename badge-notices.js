import {BADGES,badgeCount} from './learning.js';

const MESSAGES=[
 'Our first badge! My name, shape and voice are chosen. Let’s go exploring!',
 'A splash of you! We can choose my body colour now.',
 'Space signals! My antennae choices are ready.',
 'Flight wardrobe unlocked! Let’s choose a helmet and flight suit.',
 'Extra bounce! Space boots and scanners are ready to try.',
 'Rainbow explorer! My bright rainbow suit is ready to wear.'];

// Existing explorers start at their earned level; upgrades never replay old awards.
export function initialiseBadgeNotices(profile){
 const mission=profile.mission;
 if(!Number.isInteger(mission.badgeNoticeLevel))mission.badgeNoticeLevel=badgeCount(profile);
 mission.pendingBadges=(mission.pendingBadges||[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=BADGES.length);
}
export function collectBadgeNotices(profile){
 const mission=profile.mission,level=badgeCount(profile),previous=mission.badgeNoticeLevel||0;
 mission.pendingBadges??=[];
 for(let n=previous+1;n<=level;n++)if(!mission.pendingBadges.includes(n))mission.pendingBadges.push(n);
 mission.badgeNoticeLevel=level;
 return mission.pendingBadges;
}
export function nextBadgeNotice(profile){
 const number=profile.mission.pendingBadges?.[0],badge=BADGES[number-1];
 return badge?{number,title:badge.title,reward:badge.reward,message:MESSAGES[number-1]}:null;
}
export function acknowledgeBadgeNotice(profile){return profile.mission.pendingBadges?.shift()??null;}
