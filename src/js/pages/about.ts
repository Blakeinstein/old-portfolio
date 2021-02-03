import stars from "url:../../assets/logo.svg";

let aboutRender = () => {
    return `<div id="about">
    <div class="about-content transition-in no-scroll">
        <h1>Hi, I'm Rishikesh Anand!</h1>
        <h3>Known on the internet as Blaine.</h3>
        <p>I'm a developer, software engineer and a tech enthusiast. I love to try new things, explore possibilites and anything that amuses my curiosity. I am currently pursuing a degree in Computer Science and Engineering at, National Institute of Technology, Delhi.</p>
        <h4>Languages and Frameworks</h4>
        <ul class="languages">
            <li>Rust</li>
            <li>Javascript/Typescript</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>others..</li>
        </ul>
        <h4>Experience</li>
        <ul class="experience">
            <li>Intern at FOSSEE, IIT Bombay</li>
            <li>Executive Member at UpVision, Tech club of NIT Delhi</li>
        </ul>
        <div class="about-links">
            <a class="fancy-button" href="https://drive.google.com/file/d/1MQjMb-XB-TLvx1LrGUSgP6O0sfBEodCF/view?usp=sharing">Resume</a>
            <a class="fancy-button" href="/projects/" data-navigo>Projects</a>
        </div>
    </div>
    <img src="${stars}" /> 
</div>`
}

export default aboutRender;