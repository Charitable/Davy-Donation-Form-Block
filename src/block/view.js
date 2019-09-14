/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Davy components
 */
import DavyTextField from '../components/text-field';
import DavyEmailField from '../components/email-field';

/**
 * The main donation form block UI.
 */
export default class DavyDonationFormView extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render() {
		return (
			<form className="davy-donation-form">
				<ul className="davy-donation-form--steps">
					<li className="davy-donation-form--amount-step-title active">{ __( 'Amount' ) }</li>
					<li className="davy-donation-form--details-step-title">{ __( 'Details' ) }</li>
				</ul>
				<div className="davy-donation-form--step-content davy-donation-form--amount-step-content">
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
					<button className="davy-donation-form--continue-button davy-donation-form--button">{ __( 'Continue' ) }</button>
				</div>
				<div className="davy-donation-form--step-content davy-donation-form--details-step-content">
					<DavyEmailField
						field="email"
						label={ __( 'Email' ) }
					/>
					<DavyTextField
						field="first_name"
						label={ __( 'First Name' ) }
					/>
					<DavyTextField
						field="last_name"
						label={ __( 'Last Name' ) }
					/>
					<button className="davy-donation-form--continue-button davy-donation-form--button">{ __( 'Go Back' ) }</button>
					<button className="davy-donation-form--donate-button davy-donation-form--button" data-paypal={ this.props.paypal }>{ __( 'Donate' ) }</button>
				</div>
			</form>
		);
	}
}
