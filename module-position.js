// Only reset the viewport for a new/resumed module, never for each answer.
export function positionModuleEntry({previousView,currentView,session,previousSession,document:doc=document,frame=requestAnimationFrame,isCurrent=()=>true}){
 if(currentView!=='game'||!session||session.finished||(previousView==='game'&&previousSession===session))return false;
 const align=()=>{if(isCurrent())doc.querySelector('.game-top')?.scrollIntoView({block:'start',behavior:'instant'});};
 align();frame(align);return true;
}
