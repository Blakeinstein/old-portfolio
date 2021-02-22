window['projectPages'] = false;

import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.css'
import tippy, {animateFill, delegate, roundArrow} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-away.css';
import 'ghspa';

import Sketch from './sketch';
import './router';

function main() {
    console.log("🚀 Coded with ❤ by Blaine.")
    const sketch: Sketch = new Sketch();
    // interactivity
    let content = $('#content');

    $('#toggleScene').on('click', function() {
        if ($(this).hasClass('fa-toggle-off')){
            content.addClass('hide');
            sketch.container.style.zIndex = '1';
            $(this).removeClass('fa-toggle-off');
            $(this).addClass('fa-toggle-on');
        } else {
            content.removeClass('hide');
            sketch.container.style.zIndex = '-1';  
            $(this).removeClass('fa-toggle-on');
            $(this).addClass('fa-toggle-off');
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
