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
let content = document.getElementById('content');

document.getElementById('toggleScene').addEventListener('click', function() {
    let that = this as HTMLElement;
    if (that.classList.contains('fa-toggle-off')){
        content.classList.add('hide');
        sketch.container.style.zIndex = '1';
        that.classList.remove('fa-toggle-off');
        that.classList.add('fa-toggle-on');
        // that.style.opacity = '1 !important';
    } else {
        content.classList.remove('hide');
        sketch.container.style.zIndex = '-1';  
        that.classList.remove('fa-toggle-on');
        that.classList.add('fa-toggle-off');
    }
});