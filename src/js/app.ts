import '@fortawesome/fontawesome-free/css/all.css'
import tippy, {animateFill, delegate, roundArrow} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-away.css';

import Sketch from './sketch';
import './router';

function main() {
    console.log("🚀 Coded with ❤ by Blaine.")
    const sketch: Sketch = new Sketch();
    // interactivity
    let content = document.querySelector('#content');

    document.querySelector('#toggleScene').addEventListener('click', function() {
        if (this.classList.contains('fa-toggle-off')){
            content.classList.add('hide');
            sketch.container.style.zIndex = '1';
            this.classList.remove('fa-toggle-off');
            this.classList.add('fa-toggle-on');
        } else {
            content.classList.remove('hide');
            sketch.container.style.zIndex = '-1';  
            this.classList.remove('fa-toggle-on');
            this.classList.add('fa-toggle-off');
            sketch.resetCam();
        }
    });

    tippy('[main-tooltip]', {
        theme: 'space',
        appendTo: () => document.body,
        allowHTML: true,
        hideOnClick: false,
        trigger: 'mouseenter',
        placement: 'auto',
        animateFill: true,
        plugins: [animateFill],
    });

    delegate('#main', {
        target: '[emotion-tool-tip]',
        appendTo: () => document.body,
        theme: 'emotion',
        allowHTML: true,
        arrow: roundArrow,
        placement: 'auto',
        interactive: true,
    })
}

window.addEventListener('load', main);
