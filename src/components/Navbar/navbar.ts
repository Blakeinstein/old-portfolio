import type { Options } from 'blobity/lib/Blobity';
import Blobity from 'blobity';

import anime from "animejs/lib/anime.es.js";
import Swup from 'swup';
import SwupSlideTheme from "@swup/slide-theme";
import SwupHeadPlugin from '@swup/head-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import contactMain from "../Contact/contact";

class Navbar {
	burger: HTMLElement;
	nav: HTMLElement;
	folded: Boolean;
	animating: Boolean;

	constructor() {
		this.burger = document.querySelector(".burger");
		this.nav = document.querySelector(".navbar");
		this.burger.addEventListener("click", this.click.bind(this));
		this.folded = true;
		this.animating = false;
		
		this.nav.querySelectorAll('li').forEach(el => {
			el.addEventListener('click', this.hide.bind(this));
		})
	}

	click() {
		if (this.animating) return;
		if (this.folded) this.show();
		else this.hide();
	}

	show() {
		if (!this.folded || this.animating) return;
		this.animating = true;
		
		this.burger.style.pointerEvents = "none";
		this.nav.classList.add("active");
		this.burger.classList.add("active");
		let tl = anime.timeline();

		tl.add({
			targets: ".navbar",
			duration: 200,
			scaleY: "1",
			easing: "easeOutSine",
		});
		tl.add({
			targets: "nav>ul>li",
			stagger: 50,
			delay: (el, i) => i * 30,
			translateX: "0px",
			opacity: 1,
			easing: "easeOutElastic",
		});

		this.animating = false;
		this.burger.style.pointerEvents = "auto";
		this.folded = false;
	}

	hide() {
		if (this.folded || this.animating) return;
		this.animating = true;
		this.burger.style.pointerEvents = "none";
		this.nav.classList.remove("active");
		let tl = anime.timeline();

		tl.add({
			targets: "nav>ul>li",
			translateX: "-100px",
			delay: (el, i) => i * 14,
			opacity: 0,
			easing: "easeInElastic",
		});
		tl.add({
			targets: ".navbar",
			duration: 150,
			scaleY: 0,
			easing: "easeOutSine",
		});
		
		this.animating = false;
		tl.finished.then(this.resetAnimating.bind(this));
		this.burger.style.pointerEvents = "auto";
		this.folded = true;
	}

	resetAnimating () {
		this.burger.classList.remove("active");
	}
}

const navbar = new Navbar();

console.log("🚀 Coded with ❤ by Blaine.");

const swup = new Swup({
  plugins: [ new SwupSlideTheme(), new SwupPreloadPlugin(), new SwupHeadPlugin({
		"persistAssets": true
	})],
});

function init () {
	if (document.querySelector('#contact')) contactMain();
}

swup.preloadPages();

init();
swup.on('contentReplaced', init);

const blobityOptions: Partial<Options> = {
	licenseKey: 'blobity-license-key',
	color: '#e3f2fd',
	opacity: 0.3,
	size: 28,
	dotColor: '#eeeeee',
	focusableElements: '.burger, a, a svg, #noSpamDiv>label, button, input, textarea, select, .swup-transition-link',
	mode: 'slow',
}

const blobity = new Blobity(blobityOptions);