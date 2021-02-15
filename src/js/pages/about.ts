import { html } from 'lit-html';

import stars from "url:../../assets/logo.svg";

let aboutRender = () => {
    return html`<div id="about">
    <h1>Hi, I'm Rishikesh Anand!</h1>
    <div class="about-content">
        <div class="about-text">
            <h3>Known on the internet as Blaine.</h3>
            <p>I'm a developer, software engineer and a tech enthusiast. I love to try new things, explore possibilites and anything that amuses my curiosity. I am currently pursuing a degree in Computer Science and Engineering at, National Institute of Technology, Delhi.</p>
            <h4><i class="fas fa-angle-down"></i> Languages and Frameworks</h4>
            <ul class="languages">
                <li> <div data-tippy-content="Serde, WebViewRS/Tauri, Rocket...">Rust</div></li>
                <li> <div data-tippy-content="React, ThreeJS, GSAP, JQuery">Javascript/Typescript</div></li>
                <li> <div data-tippy-content="PyQT5/PySide2, FBS, Pandas">Python</div></li>
                <li> <div data-tippy-content="Qt5, Boost">C/C++</div></li>
                <li> <div data-tippy-content="MATLAB, Latex, Julia, GoLang, Sass, WASM, ASM8086 and ASM6402">others..</div></li>
            </ul>
            <h4><i class="fas fa-angle-down"></i> Skillsets</h4>
            <ul class="Skillsets">
                <li>Software Engineering</li>
                <li> <div data-tippy-content="Docker, Vim, Bash, SSH, Git">Devtools</div></li>
                <li> <div data-tippy-content="After Effects, Photoshop, Illustrator...">Adobe Suite</div></li>
            </ul>
            <h4><i class="fas fa-angle-down"></i> Experience</h4>
            <ul class="experience">
                <li> <div data-tippy-content="<a href=''>Github</a>, <a href=''>Certificate</a>, <a href=''>Report</a>">Intern at FOSSEE, IIT Bombay</div></li>
                <li> <div data-tippy-content="<a href=''>Github</a>, <a href=''>Website</a>">Executive Member at UpVision, Tech club of NIT Delhi</div></li>
            </ul>
            <div class="about-links">
                <a class="ghostButton" href="https://drive.google.com/file/d/1MQjMb-XB-TLvx1LrGUSgP6O0sfBEodCF/view?usp=sharing">Resume</a>
                <a class="ghostButton" href="/projects/" data-navigo>Projects</a>
            </div>
        </div>
        <img src="${stars}" /> 
    </div>
</div>`
}

export default aboutRender;