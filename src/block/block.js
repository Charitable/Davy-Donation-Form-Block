import DavyDonationFormView from './view';

/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Toolbar, TextControl } = wp.components;
const { BlockControls, } = wp.editor;

/**
 * The main donation form block UI.
 */
export default class DavyDonationFormBlock extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			edit_mode: ! this.props.attributes.paypal,
		};

		this.updateEditMode       = this.updateEditMode.bind( this );
		this.getInspectorControls = this.getInspectorControls.bind( this );
		this.getToolbarControls   = this.getToolbarControls.bind( this );
		this.getSettingsEditor    = this.getSettingsEditor.bind( this );
		this.getPreview           = this.getPreview.bind( this );
	}

	/**
	 * Update edit mode in state.
	 */
	updateEditMode() {
		this.setState( {
			edit_mode: ! this.state.edit_mode
		} );
	}

	/**
	 * Get the components for the sidebar settings area that is rendered while focused on a Donation Form block.
	 *
	 * @return Component
	 */
	getInspectorControls() {
		return '';
	}

	/**
	 * Get the components for the toolbar area that appears on top of the block when focused.
	 *
	 * @return Component
	 */
	getToolbarControls() {
		const { edit_mode } = this.state;
		const { attributes } = this.props;
		const { paypal } = attributes;

		const editButton = [
			{
				icon: 'edit',
				title: __( 'Edit' ),
				onClick: this.updateEditMode,
				isActive: this.state.edit_mode,
			},
		];

		return (
			<BlockControls key="controls">
				<Toolbar controls={ editButton } />
			</BlockControls>
		);
	}

	/**
	 * Get the block settings editor UI.
	 *
	 * @return Component
	 */
	getSettingsEditor() {
		const { attributes, setAttributes } = this.props;
		const { paypal } = attributes;

		return (
			<div class="davy-donation-block davy-donation-form-block-settings">
				<TextControl
					label="PayPal Email Address"
					value={ paypal }
					onChange={ ( paypal ) => setAttributes( { paypal: paypal } ) }
				/>
			</div>
		);
	}

	/**
	 * Get the block preview.
	 *
	 * @return Component
	 */
	getPreview() {
		const { attributes } = this.props;
		const { paypal } = attributes;
		return (
			<div className="davy-donation-form-block davy-donation-form-block-preview">
				<DavyDonationFormView { ... this.props } />
			</div>
		);
	}

	/**
	 * Render the block UI.
	 */
	render() {
		return [
			this.getInspectorControls(),
			this.getToolbarControls(),
			this.state.edit_mode ? this.getSettingsEditor() : this.getPreview(),
		];
	}
}
