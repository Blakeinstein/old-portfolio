import { init, send } from "emailjs-com";
import tippy, { roundArrow } from "tippy.js";

init("user_wird1j6wAcU6lj00aaLo9");

let isSending = false;

document.getElementById('noSpam').oninvalid = () => {
	console.log("Checkbox not in the checked file. This incident will be reported.");
	tippy("#noSpamDiv", {
		content: "I am glad you are honest about being a spammer.",
		inertia: true,
		arrow: roundArrow,
		placement: "top",
		showOnCreate: true,
		trigger: "manual",
	});
}

document.getElementById('contactForm').addEventListener('submit', (e: Event) => {
	e.preventDefault();

	if (isSending) return false;

	let FD = new FormData(
		document.getElementById("contactForm") as HTMLFormElement,
	);
	let params = {
		name: FD.get("name"),
		email: FD.get("email"),
		subject: FD.get("subject"),
		message: FD.get("message"),
	};

	isSending = true;
	let proceed = true;
	send("main", "base", params).then(
		res => {
			if (res.status == 200) {
				document
					.querySelector("#contactForm")
					.classList.add("slow-fade-out");
				document
					.querySelector("#complete")
					.classList.add("slow-fade-in");
			} else {
				tippy("#submit", {
					content: `${res.status}: ${res.text}`,
					inertia: true,
					arrow: roundArrow,
					placement: "top",
					showOnCreate: true,
					trigger: "manual",
				});
				proceed = false;
			}
			isSending = false;
		},
		err => {
			tippy("#submit", {
				content: `${err}`,
				inertia: true,
				arrow: roundArrow,
				placement: "top",
				showOnCreate: true,
				trigger: "manual",
			});
			isSending = false;
		},
	);
	return proceed;
});