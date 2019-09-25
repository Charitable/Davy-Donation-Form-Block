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
		const { attributes } = this.props;
		const { paypal } = attributes;

		return (
			<form className="davy-donation-form" method="post">
				<DavyHiddenField
					name="paypal"
					value={ paypal }
				/>
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
					<DavyButton
						classes="davy-donation-form--continue-button"
						text={ __( 'Continue' ) }
						name="continue"
					/>
				</div>
				<div className="davy-donation-form--step-content davy-donation-form--details-step-content">
					<DavyInputField
						field="email"
						label={ __( 'Email' ) }
						type="email"
					/>
					<DavyInputField
						field="first_name"
						label={ __( 'First Name' ) }
						type="text"
					/>
					<DavyInputField
						field="last_name"
						label={ __( 'Last Name' ) }
						type="text"
					/>
					<DavyButton
						classes="davy-donation-form--return-button"
						text={ __( 'Go Back' ) }
						name="previous"
					/>
					<DavyButton
						classes="davy-donation-form--donate-button"
						text={ __( 'Donate' ) }
						name="donate"
					/>
				</div>
			</form>
		);
	}
}
