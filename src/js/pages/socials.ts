import { html } from 'lit-html';

const socialsRender = () => {
    return html`<div id="socials">
        <div class="row">
            <ul class="icons social-media">
                <li><a>linkedin</a></li>
                <li><a>twitter</a></li>
                <li><a>reddit</a></li>
                <li><a>twitter</a></li>
                <li><a>instagram</a></li>
            </ul>
            <ul class="icons productivity">
                <li><a>github</a></li>
                <li><a>stackoverflow</a></li>
            </ul>
        </div>
        <div class="row">
            <ul class="icons gaming">
                <li><a>steam</a></li>
                <li><a>discord</a></li>
                <li><a>battle.net</a></li>
            </ul>
            <ul class="icons other">
                <li><a>myanimelist</a></li>
                <li><a>soundcloud</a></li>
            </ul>
        </div>
    </div>"`
}

export default socialsRender;