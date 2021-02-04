import Navigo from 'navigo';

import aboutRender from './pages/about';

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

const routes: {path: string, render: Function}[] = [{
        path: 'about',
        render: aboutRender
    }, {
        path: 'projects',
        render: () => `<div>aaa</div>`
    }, {
        path: 'socials',
        render: () => `bbb`
    }, {
        path: 'contact',
        render: () => `ccc`
    }, {
        path: '^$',
        render: () => ``
    },
]

const router = new Navigo('/');

const contentDom = document.getElementById('main');

routes.forEach(route => {
    router.on(route.path, () => {
        let temp = (e: Event) => {
            console.log(e);
            contentDom.removeEventListener(transitionEvent, temp, false);
            contentDom.innerHTML = route.render();
            contentDom.style.opacity = '1';
        };
        contentDom.addEventListener(transitionEvent, temp, false);
        contentDom.style.opacity = '0';
    })
})

router.notFound(()=> {
    contentDom.innerHTML = `
        <div class="404">404 Not-Found</div>
    `;
})

router.resolve();