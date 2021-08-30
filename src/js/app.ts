

import Sketch from '../components/Scene/sketch';
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

    
}

window.addEventListener('load', main);
