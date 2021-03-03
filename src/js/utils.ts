const animationEvent = (() => {
    var el: HTMLElement = document.createElement("faux");

    var events: Record<string, string> = { 
        'WebkitAnimation' : 'webkitAnimationEnd', 
        'OAnimation' : 'oAnimationEnd', 
        'msAnimation' : 'MSAnimationEnd', 
        'animation' : 'animationend' 
    }

    for (let t in events){
        if (el.style[t] !== undefined){
          return events[t];
        }
    }
})();

const transitionEvent = (() => {
    var el: HTMLElement = document.createElement("faux");
  
    var transitions:Record<string, string> = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (let t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
})();

export {animationEvent, transitionEvent};