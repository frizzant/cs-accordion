/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps, InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, ToggleControl, RangeControl} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const {
		duration,
		collapse,
		showMultiple,
	} = attributes;

	const ALLOWED_BLOCKS = ['cs/accordion-inner'];
	const TEMPLATE = [['cs/accordion-inner'], ['cs/accordion-inner'], ['cs/accordion-inner']];

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<RangeControl
						label={__('Open/Close Duration', 'cs-accordion')}
						value={ duration }
						isShiftStepEnabled={ true }
						min={ 0 }
						max={ 2000 }
						step={ 50 }
						onChange={ (value) => setAttributes({duration: value}) }
					/>
					<ToggleControl
						label={__('Automatic collapse on click', 'cs-accordion')}
						help={collapse ? __('Yes') : __('No')}
						checked={collapse}
						onChange={() => setAttributes({collapse: !collapse})}
					/>
					<ToggleControl
						label={__('Show multiple', 'cs-accordion')}
						help={showMultiple ? __('Yes') : __('No')}
						checked={showMultiple}
						onChange={() => setAttributes({showMultiple: !showMultiple})}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="wp-block-cs-accordion accordion-container">
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
					/>
				</div>
			</div>
		</>
	);
}
