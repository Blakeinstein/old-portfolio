import anime from "animejs/lib/anime.es.js";

class Navbar {
	burger: HTMLElement;
	nav: HTMLElement;
	bottomBar: HTMLElement;
	middleBar: HTMLElement;
	topBar: HTMLElement;
	folded: Boolean;

	constructor() {
		this.burger = document.querySelector(".burger");
		this.nav = document.querySelector(".navbar");
		this.topBar = document.querySelector(".bar-top");
		this.middleBar = document.querySelector(".bar-middle");
		this.bottomBar = document.querySelector(".bar-bottom");
		this.burger.addEventListener("click", this.click.bind(this));
		this.folded = false;
	}

	click() {
		this.burger.style.pointerEvents = "none";
		this.nav.classList.toggle("navbar-active");
		let tl = anime.timeline();
		if (this.folded) {
			this.show(tl);
		} else {
			this.hide(tl);
		}
	}

	show(tl: any) {
		if (!this.folded) return;

		this.topBar.classList.remove("animate-out-top-bar");
		this.topBar.classList.add("animate-top-bar");

		this.middleBar.classList.remove("animate-out-middle-bar");
		this.middleBar.classList.add("animate-middle-bar");

		this.bottomBar.classList.remove("animate-out-bottom-bar");
		this.bottomBar.classList.add("animate-bottom-bar");

		this.nav.classList.remove("overlay-slide-up");
		this.nav.classList.add("overlay-slide-down");

		tl.add({
			targets: ".navbar",
			duration: 100,
			height: "100vh",
			easing: "easeInSine",
		});
		tl.add({
			targets: "nav>ul>li",
			stagger: 150,
			delay: (el, i) => i * 50,
			translateX: "0px",
			opacity: 1,
			easing: "easeOutElastic",
		});
		this.burger.style.pointerEvents = "auto";
		this.folded = false;
	}

	hide(tl: any) {
		if (this.folded) return;
		this.burger.style.pointerEvents = "none";

		this.topBar.classList.remove("animate-top-bar");
		this.topBar.classList.add("animate-out-top-bar");

		this.middleBar.classList.remove("animate-middle-bar");
		this.middleBar.classList.add("animate-out-middle-bar");

		this.bottomBar.classList.remove("animate-bottom-bar");
		this.bottomBar.classList.add("animate-out-bottom-bar");

		this.nav.classList.remove("overlay-slide-down");
		this.nav.classList.add("overlay-slide-up");

		tl.add({
			targets: "nav>ul>li",
			stagger: 150,
			translateX: "-100px",
			delay: (el, i) => i * 50,
			opacity: 0,
			easing: "easeInElastic",
		});
		tl.add({
			targets: ".navbar",
			duration: 100,
			height: 0,
			easing: "easeOutSine",
		});
		this.burger.style.pointerEvents = "auto";
		this.folded = true;
	}
}

export default Navbar;
