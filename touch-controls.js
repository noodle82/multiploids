// Keep rapid game taps from becoming Safari's smart zoom. Pinching and scrolling
// remain browser gestures; drawing and character holds keep their own handlers.
export function installTouchZoomGuard(root=document){let press=null,lastTap=null;const options={capture:true,passive:false},editable=target=>target.closest('input:not([readonly]),textarea,select,[contenteditable="true"]'),gameTarget=target=>target instanceof Element&&target.closest('#app')&&!editable(target);
 const start=event=>{if(event.touches.length!==1||!gameTarget(event.target)){press=null;lastTap=null;return;}const point=event.touches[0];press={x:point.clientX,y:point.clientY,time:event.timeStamp,moved:false};};
 const move=event=>{if(!press)return;if(event.touches.length!==1){press=null;lastTap=null;return;}const p=event.touches[0];if(Math.hypot(p.clientX-press.x,p.clientY-press.y)>12)press.moved=true;};
 const end=event=>{const current=press;press=null;if(!current||current.moved||event.touches.length||event.changedTouches.length!==1||event.timeStamp-current.time>350||!gameTarget(event.target)){lastTap=null;return;}const p=event.changedTouches[0],previous=lastTap;lastTap={x:p.clientX,y:p.clientY,time:event.timeStamp};if(!previous||event.timeStamp-previous.time>350||Math.hypot(p.clientX-previous.x,p.clientY-previous.y)>32||!event.cancelable)return;
  const wasPrevented=event.defaultPrevented;event.preventDefault();
  // Cancelling touchend also cancels its compatibility click. Deliver exactly
  // one click for ordinary controls so rapid 5,5 still enters 55. Pointer-driven
  // character, drawing and row-drag gestures have already handled the touch.
  if(wasPrevented||event.target.closest('[data-pal],canvas,#star-row-source'))return;const control=event.target.closest('button,a,summary,label');if(control?.isConnected&&!control.disabled)control.click();
 };
 const cancel=()=>{press=null;lastTap=null;};root.addEventListener('touchstart',start,options);root.addEventListener('touchmove',move,options);root.addEventListener('touchend',end,options);root.addEventListener('touchcancel',cancel,options);return()=>{root.removeEventListener('touchstart',start,options);root.removeEventListener('touchmove',move,options);root.removeEventListener('touchend',end,options);root.removeEventListener('touchcancel',cancel,options);};}
