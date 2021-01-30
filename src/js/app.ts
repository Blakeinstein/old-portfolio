import Sketch from './sketch';
import Router from './router';
import '@fortawesome/fontawesome-free/css/all.css'
import tippy, {animateFill} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

const router: Router = new Router({
    mode: 'hash',
    root: '/'
});

router
    .add('/about/', () => {
        alert("Going to about page!");
    })
    .add('/Projects/', () => {
        alert("Going to projects page!");
    })
    .add('/Socials/', () => { 
        alert("Going to socials page!");
    })
    .add('/Playlists/', () => {
        alert("Going to playlists page!");
    })
    .add('', () => {
        console.log("Home Page!");
    })

function main() {
    const sketch: Sketch = new Sketch();
    // interactivity
    let content = document.getElementById('content');

    document.getElementById('toggleScene').addEventListener('click', function() {
        let that = this as HTMLElement;
        if (that.classList.contains('fa-toggle-off')){
            content.classList.add('hide');
            sketch.container.style.zIndex = '1';
            that.classList.remove('fa-toggle-off');
            that.classList.add('fa-toggle-on');
        } else {
            content.classList.remove('hide');
            sketch.container.style.zIndex = '-1';  
            that.classList.remove('fa-toggle-on');
            that.classList.add('fa-toggle-off');
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
}

window.addEventListener('load', main);
