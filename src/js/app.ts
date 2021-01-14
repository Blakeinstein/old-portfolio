
import Sketch from './sketch';
import Router from './router';

const sketch: Sketch = new Sketch({});

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

sketch.render();