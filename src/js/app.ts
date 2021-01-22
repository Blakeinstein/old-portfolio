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

document.getElementById('toggleScene').addEventListener('click', function() {
    let that = this.firstChild as HTMLElement;
    if (that.classList.contains('fa-toggle-on')){
        sketch.container.style.zIndex = '1';
        that.classList.toggle('fa-toggle-off');
    } else {
        sketch.container.style.zIndex = '-1';
        that.classList.toggle('fa-toggle-on');
    }
});