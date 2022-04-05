/**
 * Accordion Dependency
 * https://github.com/michu2k/Accordion
 */
import Accordion from 'accordion-js';

document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll('.wp-block-cs-accordion > .accordion-container');

	[...accordions].map(accordion => {
		/** Parent Container; extract settings **/
		const settings = JSON.parse(accordion.getAttribute('data-settings') ? accordion.getAttribute('data-settings') : '{}');

		/** Child Container **/
		const innerElements = accordion.querySelectorAll('.wp-block-cs-accordion-inner.ac');
		let openOnInit = [];
		let innerIndex = 0;
		[...innerElements].map(innerElement => {
			if (innerElement.getAttribute('data-accordion-inner-open') === 'true') {
				openOnInit.push(innerIndex);
			}
			innerIndex++;
		})

		new Accordion(accordion, {
			openOnInit: openOnInit,
			...settings,
		});
	})
});
