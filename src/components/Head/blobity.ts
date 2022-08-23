import type { Options } from 'blobity/lib/Blobity';
import Blobity from 'blobity';

const blobityOptions: Partial<Options> = {
	licenseKey: 'blobity-license-key',
	color: '#e3f2fd',
	opacity: 0.3,
	size: 28,
	dotColor: '#eeeeee',
	font: 'chillax',
	fontSize: 28,
	focusableElements: '.burger, a, a svg, #noSpamDiv>label, button, input, textarea, select, .swup-transition-link',
	mode: 'slow',
}
declare global {
	interface Window {
  	blobity: Blobity;
	}
}

window.blobity = new Blobity(blobityOptions);