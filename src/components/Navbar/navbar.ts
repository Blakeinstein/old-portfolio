import anime from "animejs/lib/anime.es.js";
import Swup from 'swup';
import SwupSlideTheme from "@swup/slide-theme";
import SwupHeadPlugin from '@swup/head-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';

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
	}

	click() {
		if (this.animating) return;
		this.burger.style.pointerEvents = "none";
		this.nav.classList.toggle("active");
		let tl = anime.timeline();
		if (this.folded) this.show(tl);
		else this.hide(tl);
	}

	switchPage() {
		if (this.folded) return;
		this.click();
	}

	show(tl: any) {
		if (!this.folded || this.animating) return;
		this.animating = true;
		this.burger.classList.add("active");

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

		tl.finished.then(this.resetAnimating.bind(this, false));
		this.burger.style.pointerEvents = "auto";
		this.folded = false;
	}

	hide(tl: any) {
		if (this.folded || this.animating) return;
		this.animating = true;
		this.burger.style.pointerEvents = "none";
		
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
		
		tl.finished.then(this.resetAnimating.bind(this, true));
		this.burger.style.pointerEvents = "auto";
		this.folded = true;
	}

	resetAnimating (remove: boolean) {
		this.animating = false;
		remove && this.burger.classList.remove("active");
	}
}

const navbar = new Navbar();

console.log("🚀 Coded with ❤ by Blaine.")

const swup = new Swup({
  plugins: [ new SwupSlideTheme(), new SwupPreloadPlugin(), new SwupHeadPlugin({
    "persistAssets": true
  })],
});

swup.preloadPages();

swup.on('clickLink', navbar.switchPage.bind(navbar));