import { init, send } from "emailjs-com";
import tippy, { roundArrow } from "tippy.js";

init("user_wird1j6wAcU6lj00aaLo9");

let isSending = false;

function invalidSpam () {
	console.log("Spammer not in the checked file. This incident will be reported.");
	tippy("#noSpamDiv", {
		content: "Spammer not in the checked file. This incident will be reported.",
		inertia: true,
		arrow: roundArrow,
		placement: "top",
		showOnCreate: true,
		trigger: "manual",
	});
}

function contactSubmit (e: Event) {
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
			console.log(res);
			if (res.status == 200) {
				document
					.querySelector(".formBox")
					.classList.add("complete");
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
}

function contactMain() {
	document.getElementById('noSpam').oninvalid = invalidSpam;

	document.getElementById('contactForm').onsubmit = contactSubmit;
}

export default contactMain;