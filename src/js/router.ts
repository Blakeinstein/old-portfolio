import anime from 'animejs/lib/anime.es.js';

import aboutRender from './pages/about';
import projectsRender from './pages/projects';
import contactRender from './pages/contact';
import socialsRender from './pages/socials';

import Navbar from './components/navbar';

import { transitionEvent } from './utils';

const navbar: Navbar = new Navbar();

const routes: {path: string, render: string}[] = [{
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

// const router = new Navigo('/');

// const contentDom = document.getElementById('main');

// routes.forEach(route => {
//     router.on(route.path, () => {
//         let tl = anime.timeline();
//         tl.add({
//             targets: contentDom,
//             opacity: 0,
//             translateY: 20
//         });
//         navbar.hide(tl);
//         contentDom.innerHTML = route.render;
//         tl.add({
//             targets: contentDom,
//             opacity: 1,
//             translateY: 0
//         });
//         // let temp = (e: Event) => {
//         //     contentDom.removeEventListener(transitionEvent, temp, false);
//         //     render(route.render, contentDom);
//         //     navbar.hide(tl);
//         //     contentDom.style.opacity = '1';
//         //     contentDom.style.transform = 'translateY(0)';
//         // };
//         // contentDom.addEventListener(transitionEvent, temp, false);
//         // contentDom.style.opacity = '0';
//         // contentDom.style.transform = 'translateY(20px)';
//     })
// })

// router.notFound(()=> {
//     contentDom.innerHTML = `
//         <div class="404">404 Not-Found</div>
//     `;
// })

// router.resolve();