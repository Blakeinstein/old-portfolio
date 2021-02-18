import { html } from 'lit-html';

import data from "../../data/projects.json"

const projectCard = (info: {
    'name': string,
    'description': string,
    "lang": string[],
    "libs": string[],
    "url": string,
    "image": string
}) => {
    return html`<div class="card">
        <div class="content">
            <div class="preview-image"><img src=${info.image} /></div>
            <div class="name">${info.name}</div>
            <div class="tech">
                <div class="languages">${info.lang.join(", ")}</div>
                <div class="libraries">${info.libs.join(", ")}</div>
            </div>
            <div class="desc">${info.description}</div>
            <a class="ghostButton" href=${info.url}>View</a>
        </div>
    </div>`
}

const projectsRender = () => {
    return html`<div id="projects">
        ${data.map(project => {
            return projectCard(project);
        })}
    </div>`
}

export default projectsRender;