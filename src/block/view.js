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
import DavySelectField from '../components/select-field';

/**
 * The main donation form block UI.
 */
export default class DavyDonationFormView extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Get the form fields UI.
	 */
	getFormFields() {
		return (
			DAVY_VARS.formSections.map((section) => {
				const fields = DAVY_VARS.formFields.filter((field) => {
					return section.key === field.section;
				});

				if ( fields.length ) {
					fields.sort((a, b) => {
						if (a.priority < b.priority) return -1;
						if (a.priority > b.priority) return 1;
						return 0;
					});

					return this.getSectionFields(section, fields);
				}
			})
		);
	}

	/**
	 * Get the fields in a section.
	 */
	getSectionFields(section, fields) {
		const classes = 'davy-donation-form--step-content davy-donation-form--' + section.key + '-step-content';
		return (
			<div className={ classes } data-tab={ section.key }>
				{
					fields.map((field) => {
						switch( field.type ) {
							case 'select':
								return <DavySelectField
									field={ field.key }
									label={ field.label }
									options={ field.options }
								/>

							default:
								return <DavyInputField
									field={ field.key }
									label={ field.label }
									type={ field.type }
								/>
						}
					})
				}
				<div className="davy-donation-form--paypal-button-container"></div>
			</div>
		);
	}

	/**
	 * Get the section headers.
	 */
	getSectionHeaders() {
		return DAVY_VARS.formSections.map((section) => {
			const { key, label, default_section } = section;

			let classes = 'davy-donation-form--' + key + '-step-title';

			if ( default_section ) {
				classes += ' active';
			}

			return (
				<li className={ classes } data-tab={ key  }>{ label }</li>
			);
		});
	}

	/**
	 * Render the block UI.
	 */
	render() {
		const { attributes } = this.props;
		const { paypal_client_id, currency, thank_you_message } = attributes;

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
						{ this.getSectionHeaders() }
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
					{ this.getFormFields() }
				</form>
				<div className="davy-donation-form--thank-you">
					<p>{ thank_you_message }</p>
				</div>
			</div>
		);
	}
}
