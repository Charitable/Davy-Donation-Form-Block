/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Toolbar } = wp.components;
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

		this.getInspectorControls = this.getInspectorControls.bind( this );
		this.getToolbarControls   = this.getToolbarControls.bind( this );
		this.getSettingsEditor    = this.getSettingsEditor.bind( this );
		this.getPreview           = this.getPreview.bind( this );
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
				onClick: ! paypal ? function(){} : () => this.setState( { edit_mode: ! edit_mode } ),
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
		const self = this;
		const { attributes, setAttributes } = this.props;
		const { paypal } = attributes;

		return (
			<div class="davy-donation-block davy-donation-form-block-settings">
				<TextControl
					label="PayPal Email Address"
					value={ paypal }
					onChange={ ( paypal ) => setState( { paypal } ) }
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
		return (
			<div class="davy-donation-form-block davy-donation-form-block-preview">
				<form class="davy-donation-form">
					<ul class="davy-donation-form--steps">
						<li class="davy-donation-form--amount-step-title">{ __( 'Amount' ) }</li>
						<li class="davy-donation-form--details-step-title">{ __( 'Details' ) }</li>
					</ul>
					<div class="davy-donation-form--step-content davy-donation-form--amount-step-content">
						<div class="davy-donation-form--field davy-donation-form--suggested-amounts-field">
							<ul class="davy-donation-form--suggested-amounts">
								<li>
									<label>
										<input type="radio" name="suggested_amount" value="5" />
										{ __( '$5' ) }
									</label>
								</li>
								<li>
									<label>
										<input type="radio" name="suggested_amount" value="25" />
										{ __( '$25' ) }
									</label>
								</li>
								<li>
									<label>
										<input type="radio" name="suggested_amount" value="45" />
										{ __( '$45' ) }
									</label>
								</li>
							</ul>
						</div>
						<button class="davy-donation-form--continue-button davy-donation-form--button">{ __( 'Continue' ) }</button>
					</div>
					<div class="davy-donation-form--step-content davy-donation-form--details-step-content" style="display: none;">
						<div class="davy-donation-form--field davy-donation-form--email-field">
							<label>
								<input type="text" name="email" />
							</label>
						</div>
						<div class="davy-donation-form--field davy-donation-form--first-name-field">
							<label>
								<input type="text" name="first_name" />
							</label>
						</div>
						<div class="davy-donation-form--field davy-donation-form--last-name-field">
							<label>
								<input type="text" name="last_name" />
							</label>
						</div>
						<button class="davy-donation-form--continue-button davy-donation-form--button">{ __( 'Go Back' ) }</button>
						<button class="davy-donation-form--donate-button davy-donation-form--button" data-paypal={ this.props.paypal }>{ __( 'Donate' ) }</button>
					</div>
				</form>
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
