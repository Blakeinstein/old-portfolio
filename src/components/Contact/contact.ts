import { init, send } from "@emailjs/browser";

init("user_wird1j6wAcU6lj00aaLo9");

let isSending = false;

function invalidSpam () {
	console.log("Spammer not in the checked file. This incident will be reported.");
	window.blobity.showTooltip("Spammer not in the checked file. This incident will be reported.");
	setTimeout(() => window.blobity.reset(), 3000);
}

const contactSubmit = (e: Event) => {
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
					.querySelector(".formBox")?.classList.add("complete");
			} else {
				window.blobity.showTooltip(`${res.status}: ${res.text}`);
				setTimeout(() => window.blobity.reset(), 3000);
				proceed = false;
			}
			isSending = false;
		},
		err => {
			window.blobity.showTooltip("An unexpected error has occurred.");
			setTimeout(() => window.blobity.reset(), 3000);
			isSending = false;
		},
	);
	return proceed;
}

function contactMain() {
	document.getElementById('noSpam')?.addEventListener('invalid', invalidSpam);
	document.getElementById('contactForm')?.addEventListener('submit', contactSubmit);
}

export default contactMain;