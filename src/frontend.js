/**
 * Accordion Dependency
 * https://github.com/michu2k/Accordion
 */
import Accordion from 'accordion-js';

document.addEventListener("DOMContentLoaded", function () {
	const accordions = Array.from(document.querySelectorAll('.wp-block-cs-accordion.accordion-container'));
	new Accordion(accordions, {});
});
