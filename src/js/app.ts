window['projectPages'] = false;

import $ from "jquery";
import '@fortawesome/fontawesome-free/css/all.css'
import tippy, {animateFill, delegate} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import 'ghspa';

import Sketch from './sketch';
import './router';

function main() {
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

    tippy('[data-tippy-content]', {
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
        target: '[data-tippy-content]',
        theme: 'emotion',
        allowHTML: true,
        placement: 'auto',
        animateFill: true,
        interactive: true,
        plugins: [animateFill]
    })
}

window.addEventListener('load', main);
