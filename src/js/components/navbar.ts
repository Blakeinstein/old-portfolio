import $ from "jquery";
import anime from 'animejs/lib/anime.es.js';

class Navbar {
    burger: JQuery<HTMLElement>;
    nav: JQuery<HTMLElement>;
    bottomBar: JQuery<HTMLElement>;
    middleBar: JQuery<HTMLElement>;
    topBar: JQuery<HTMLElement>;
    folded: Boolean
    
    constructor() {
        this.burger = $('.burger');
        this.nav = $('.navbar');
        this.topBar = $('.bar-top');
        this.middleBar = $('.bar-middle');
        this.bottomBar = $('.bar-bottom');
        this.burger.on('click', this.click.bind(this));
        this.folded = false;
    }

    click() {
        this.burger.css('pointer-events', 'none');
        this.nav.toggleClass('navbar-active');
        if (this.folded) {
            this.show();
        } else {
            this.hide();
        }
    }

    show() {
        if (!this.folded) return;
        let tl = anime.timeline();
        this.topBar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        this.middleBar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        this.bottomBar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        this.nav.removeClass('overlay-slide-up').addClass('overlay-slide-down');
        tl.add({
            targets: '.navbar',
            duration: 200,
            height: '100vh',
            easing: 'easeInSine'
        });
        tl.add({
            targets: 'nav>ul>li',
            stagger: 150,
            delay: (el, i) => i * 100,
            translateX: '0px',
            opacity: 1,
            easing: 'easeOutElastic'
        });
        this.burger.css('pointer-events', 'auto');
        this.folded = false;
    }

    hide() {
        if (this.folded) return;
        let tl = anime.timeline();
        this.burger.css('pointer-events', 'none');
        this.topBar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        this.middleBar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        this.bottomBar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        this.nav.removeClass('overlay-slide-down').addClass('overlay-slide-up');
        tl.add({
            targets: 'nav>ul>li',
            stagger: 150,
            translateX: '-100px',
            delay: (el, i) => i * 100,
            opacity: 0,
            easing: 'easeInElastic'
        });
        tl.add({
            targets: '.navbar',
            duration: 200,  
            height: 0,
            easing: 'easeOutSine'
        });
        this.burger.css('pointer-events', 'auto');
        this.folded = true;
    }
}


export default Navbar;