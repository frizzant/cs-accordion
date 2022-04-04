/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';
import {InnerBlocks, RichText, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, ToggleControl} from "@wordpress/components";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType('cs/accordion-inner', {
	/**
	 * These are the attributes for this block.
	 */
	title: __('Accordion Inner Block', 'cs-accordion'),
	category: 'design',
	icon: 'slides',
	description: __('Inner accordion Block', 'cs-accordion'),
	supports: {
		align: false,
	},
	parent: ['cs/accordion'],
	textdomain: 'cs-accordion',
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: '.ac-trigger',
		},
		isOpen: {
			type: 'boolean',
			default: false,
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: ({attributes, setAttributes}) => {
		const {title, isOpen} = attributes;

		/**
		 * All blocks are allowed, and there is no template set.
		 *
		 * @type {boolean} | {array}
		 * ALLOWED_BLOCKS: https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/#allowed-blocks
		 * TEMPLATE: https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/nested-blocks-inner-blocks/#template}
		 */
		const ALLOWED_BLOCKS = true;
		const TEMPLATE = true;

		return (<>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={isOpen}>
					<ToggleControl
						label={__('Open', 'cs-accordion')}
						help={isOpen ? __('Yes') : __('No')}
						checked={isOpen}
						onChange={() => setAttributes({isOpen: !isOpen})}
					/>
				</PanelBody>
			</InspectorControls>
			<div className='wp-block-cs-accordion-inner ac'>
				<h2 className="ac-header">
					<RichText
						tagName="span"
						className="ac-trigger"
						placeholder={__('Add title', 'cs-accordion')}
						value={title}
						onChange={(value) => setAttributes({title: value})}
					/>
				</h2>
				<div className="ac-panel">
					<div className="ac-text">
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
							template={TEMPLATE}
						/>
					</div>
				</div>
			</div>
		</>);
	},
	/**
	 * @see ./save.js
	 */
	save: ({attributes}) => {
		const {title, isOpen} = attributes;

		return (<div className='wp-block-cs-accordion-inner ac' data-accordion-inner-open={isOpen}>
			<h2 className="ac-header">
				<RichText.Content
					tagName="span"
					className="ac-trigger"
					value={title}
				/>
			</h2>
			<div className="ac-panel">
				<div className="ac-text">
					<InnerBlocks.Content/>
				</div>
			</div>
		</div>);
	},
});
