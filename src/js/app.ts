import Sketch from './sketch';
import Router from './router';
import '@fortawesome/fontawesome-free/css/all.css'

const sketch: Sketch = new Sketch();

const router: Router = new Router({
    mode: 'history',
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

// interactivity

document.getElementById('toggleScene').onclick = (e: Event) => {
    console.log(e);
    if (e.target.classList[1] == 'fa-toggle-on'){
        sketch.container.style.zIndex = '1';
        e.target.classList[1] = 'fa-toggle-off';
    } else {
        sketch.container.style.zIndex = '-1';
        e.target.classList[1] = 'fa-toggle-on';
    }
};