import { init, send } from "@emailjs/browser";

init("user_wird1j6wAcU6lj00aaLo9");

let isSending = false;

function invalidSpam () {
	console.log("Spammer not in the checked file. This incident will be reported.");
	window.blobity.focusElement(document.querySelector("#noSpamDiv")!);
	window.blobity.showTooltip("Spammer not in the checked file. This incident will be reported.");
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
					.querySelector(".formBox")?.classList.add("complete");
			} else {
				window.blobity.focusElement(document.querySelector("#submit")!);
				window.blobity.showTooltip(`${res.status}: ${res.text}`);
				proceed = false;
			}
			isSending = false;
		},
		err => {
			window.blobity.focusElement(document.querySelector("#submit")!);
			window.blobity.showTooltip(`${err}`);
			isSending = false;
		},
	);
	return proceed;
}

function contactMain() {
	document.getElementById('noSpam')!.oninvalid = invalidSpam;

	document.getElementById('contactForm')!.onsubmit = contactSubmit;
}

export default contactMain;