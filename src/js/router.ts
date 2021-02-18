import Navigo from 'navigo';
import {html, render, TemplateResult} from 'lit-html';

import aboutRender from './pages/about';
import projectsRender from './pages/projects';

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

const routes: {path: string, render: TemplateResult}[] = [{
        path: 'about',
        render: aboutRender()
    }, {
        path: 'projects',
        render: projectsRender()
    }, {
        path: 'socials',
        render: (() => html`<div>bbb</div>`)()
    }, {
        path: 'contact',
        render: (() => html`<div>ccc</div>`)()
    }, {
        path: '^$',
        render: (() => html``)()
    },
]

const router = new Navigo('/');

const contentDom = document.getElementById('main');

routes.forEach(route => {
    router.on(route.path, () => {
        let temp = (e: Event) => {
            contentDom.removeEventListener(transitionEvent, temp, false);
            render(route.render, contentDom);
            contentDom.style.opacity = '1';
            contentDom.style.transform = 'translateY(0)';
        };
        contentDom.addEventListener(transitionEvent, temp, false);
        contentDom.style.opacity = '0';
        contentDom.style.transform = 'translateY(20px)';
    })
})

router.notFound(()=> {
    contentDom.innerHTML = `
        <div class="404">404 Not-Found</div>
    `;
})

router.resolve();