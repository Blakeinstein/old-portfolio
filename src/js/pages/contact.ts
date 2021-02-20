import{ init, send } from 'emailjs-com';
import { html } from 'lit-html';

init("user_wird1j6wAcU6lj00aaLo9");

const isSending = false;

function submit(e: Event) {
    e.preventDefault();

    if (isSending) return false;
    if (!(document.getElementById('noSpam') as HTMLInputElement).checked) return false;

    let FD = new FormData(document.getElementById("contactForm") as HTMLFormElement);
    let params = {
        name: FD.get('name'),
        email: FD.get('email'),
        subject: FD.get('subject'),
        message: FD.get('message'),
    }

    alert("Success");
    // send('main', 'base', params).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // });
}

const contactRender = () => {
    return html`<div id="contact">
        <div class="banner">
            <h1>MAKE CONTACT</h1>
            <h4>Send me a message, regarding anything!</h4>
        </div>
        <div class="formBox">
            <div class="final-message">
                <h1>Thanks!</h1>
                <h4>I will try to get back as soon as possible!</h4>
            </div>
            <form id="contactForm">
                <div class="row">
                    <div class="name">
                        <label for="name">Name</label><br>
                        <input type="text" id="name" name="name"required placeholder="Your Name" >
                    </div>
                    <div class="email">
                        <label for="email">Email</label><br>
                        <input type="email" id="email" name="email" placeholder="Email address" pattern="^\S+@\S+$">
                    </div>
                </div>
                <div class="row subject">
                    <label for="subject">Subject</label><br>
                    <input type="text" id="subject" name="subject" placeholder="Choose Subject">
                </div>
                <div class="row message">
                    <label for="message">Message</label><br>
                    <textarea id="Message" name="message" placeholder="Start typing here" required></textarea>
                </div>
                <div class="row">
                    <input type="checkbox" name="confidence" id="noSpam" required>
                    <label for="noSpam">I solemnly swear I am not a troll..</label>
                </div>
                <div class="row submit">
                    <a class="ghostButton frameless" id="submit" @click=${submit}>
                        Submit
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xml:space="preserve" fill="aliceblue" stroke="aliceblue">
                            <g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g>
                        </svg>
                    </a>
                </div>
            </form>
        </div>
    </div>`
}

export default contactRender;