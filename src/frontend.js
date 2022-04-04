/**
 * Accordion Dependency
 * https://github.com/michu2k/Accordion
 */
import Accordion from 'accordion-js';

document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll('.wp-block-cs-accordion.accordion-container');
	// new Accordion(accordions, {});

	[...accordions].map(accordion => {
		/** Parent Container **/
		// const settings = accordion.getAttribute('data-settings') ? accordion.getAttribute('data-settings') : '{}';

		/** Child Container **/
		const innerElements = accordion.querySelectorAll('.wp-block-cs-accordion-inner.ac');
		let openOnInit = [];
		let innerIndex = 0;
		[...innerElements].map(innerElement => {
			console.log(innerElement);
			if (innerElement.getAttribute('data-accordion-inner-open') === 'true') {
				openOnInit.push(innerIndex);
			}
			innerIndex++;
		})

		new Accordion(accordion, {
			openOnInit: openOnInit,
		});
	})
});
