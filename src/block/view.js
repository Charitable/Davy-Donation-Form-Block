/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Davy components
 */
import DavyInputField from '../components/input-field';
import DavyHiddenField from '../components/hidden-field';
import DavyButton from '../components/button';
import DefaultFields from './fields';

/**
 * The main donation form block UI.
 */
export default class DavyDonationFormView extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			ready: false,
			fields_JSON: '[]',
			fields: []
		}
	}

	/**
	 * Fetch Charitable donation fields.
	 */
	componentDidMount() {
		const self = this;

		this.setState({ ready: false });

		wp.apiFetch( {
			path: 'charitable/v1/donation-fields'
		}).then(response => {
			if (response) {
				return response;
			}
			return DefaultFields;
		}).then(response => {
			self.setState({
				fields_JSON: JSON.stringify(response),
				fields: response,
				ready: true
			});

			self.props.setAttributes({
				fields_JSON: JSON.stringify(response)
			});
		}).catch(error => {
			self.setState({
				fields_JSON: JSON.stringify(DefaultFields),
				fields: DefaultFields,
				ready: true
			});

			self.props.setAttributes({
				fields_JSON: JSON.stringify(DefaultFields)
			});
		});
	}

	/**
	 * Get the form fields UI.
	 */
	getFormFields(fields) {
		return fields.map((field) => {
			switch( field.type ) {
				default:
					return <DavyInputField
						field={ field.key }
						label={ field.label }
						type={ field.type }
					/>
			}
		});
	}

	/**
	 * Render the block UI.
	 */
	render() {
		// if ( ! this.state.ready ) {
		// 	return null;
		// }

		const { attributes } = this.props;
		const { paypal_client_id, currency, thank_you_message, fields_JSON } = attributes;

		const fields = JSON.parse( fields_JSON );

		// setAttributes({ fields: this.state.fields });

		return (
			<div className="davy-donation-form-wrapper">
				<form className="davy-donation-form" method="post">
					<DavyHiddenField
						name="paypal_client_id"
						value={ paypal_client_id }
					/>
					<DavyHiddenField
						name="currency"
						value={ currency }
					/>
					<ul className="davy-donation-form--steps">
						<li className="davy-donation-form--amount-step-title active" data-tab="amount">{ __( 'Amount' ) }</li>
						<li className="davy-donation-form--details-step-title" data-tab="details">{ __( 'Details' ) }</li>
					</ul>
					<div className="davy-donation-form--step-content davy-donation-form--amount-step-content active" data-tab="amount">
						<div className="davy-donation-form--field davy-donation-form--suggested-amounts-field">
							<ul className="davy-donation-form--suggested-amounts">
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
						<DavyButton
							classes="davy-donation-form--continue-button"
							text={ __( 'Continue' ) }
							name="continue"
						/>
					</div>
					<div className="davy-donation-form--step-content davy-donation-form--details-step-content" data-tab="details">
						{ this.getFormFields(fields) }
						<div className="davy-donation-form--paypal-button-container"></div>
					</div>
				</form>
				<div className="davy-donation-form--thank-you">
					<p>{ thank_you_message }</p>
				</div>
			</div>
		);
	}
}
