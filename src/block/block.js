import DavyDonationFormView from './view';

/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Toolbar, TextControl, TextareaControl, SelectControl } = wp.components;
const { BlockControls } = wp.editor;
const { withState } = wp.compose;

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
		const { paypal_client_id, currency, thank_you_message } = attributes;

		return (
			<div className="davy-donation-block davy-donation-form-block-settings">
				<TextControl
					label={ __( 'PayPal Client ID' ) }
					value={ paypal_client_id }
					onChange={ ( paypal_client_id ) => setAttributes( { paypal_client_id: paypal_client_id } ) }
				/>
				<SelectControl
					label={ __( 'Currency' ) }
					value={ currency }
					onChange={ ( currency ) => setAttributes( { currency: currency } ) }
					options={
						[
							{ label: __( 'Australian dollar' ), value: 'AUD' },
							{ label: __( 'Brazilian real' ), value: 'BRL' },
							{ label: __( 'Canadian dollar' ), value: 'CAD' },
							{ label: __( 'Czech koruna' ), value: 'CZK' },
							{ label: __( 'Danish krone' ), value: 'DKK' },
							{ label: __( 'Euro' ), value: 'EUR' },
							{ label: __( 'Hong Kong dollar' ), value: 'HKD' },
							{ label: __( 'Hungarian forint' ), value: 'HUF' },
							{ label: __( 'Indian rupee' ), value: 'INR' },
							{ label: __( 'Israeli new shekel' ), value: 'ILS' },
							{ label: __( 'Japanese yen' ), value: 'JPY' },
							{ label: __( 'Malaysian ringgit' ), value: 'MYR' },
							{ label: __( 'Mexican peso' ), value: 'MXN' },
							{ label: __( 'New Taiwan dollar' ), value: 'TWD' },
							{ label: __( 'New Zealand dollar' ), value: 'NZD' },
							{ label: __( 'Norwegian krone' ), value: 'NOK' },
							{ label: __( 'Philippine peso' ), value: 'PHP' },
							{ label: __( 'Polish złoty' ), value: 'PLN' },
							{ label: __( 'Pound sterling' ), value: 'GBP' },
							{ label: __( 'Russian ruble' ), value: 'RUB' },
							{ label: __( 'Singapore dollar' ), value: 'SGD' },
							{ label: __( 'Swedish krona' ), value: 'SEK' },
							{ label: __( 'Swiss franc' ), value: 'CHF' },
							{ label: __( 'Thai baht' ), value: 'THB' },
							{ label: __( 'United States dollar' ), value: 'USD' }
						]
					}
				/>
				<TextareaControl
					label={ __( 'Thank you message' ) }
					help={ __( 'Customize the message that will be displayed to donors after they complete their donation.' ) }
					value={ thank_you_message }
					onChange={ ( thank_you_message ) => setAttributes( { thank_you_message: thank_you_message } ) }
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
