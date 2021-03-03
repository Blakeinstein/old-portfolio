import Navigo from 'navigo';
import {html, render, TemplateResult} from 'lit-html';

import aboutRender from './pages/about';
import projectsRender from './pages/projects';
import contactRender from './pages/contact';
import socialsRender from './pages/socials';

import { transitionEvent } from './utils';

const routes: {path: string, render: TemplateResult}[] = [{
        path: 'about',
        render: aboutRender()
    }, {
        path: 'projects',
        render: projectsRender()
    }, {
        path: 'contact',
        render: contactRender()
    }, {
        path: 'socials',
        render: socialsRender()
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