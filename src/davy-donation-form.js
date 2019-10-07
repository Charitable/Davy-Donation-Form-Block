const Davy = function() {
	const forms = [];
	let paypal_loaded = false;

	/**
	 * Form object.
	 */
	const Form_Handler = function( form ) {
		const self = this;
		const continue_btn = form.querySelector( '.davy-donation-form--continue-button' );
		const return_btn = form.querySelector( '.davy-donation-form--return-button' );
		const donate_btn = form.querySelector( '.davy-donation-form--donate-button' );

		self.runner = {

			/**
			 * Event handler. This is the event listener for all the button
			 * click actions. It checks the targets and then routes to the
			 * correct function.
			 */
			handleEvent: function( e ) {
				e.preventDefault();

				switch ( e.target ) {
					case donate_btn:
						return this.submit();
						break;

					case continue_btn:
						return this.continue();
						break;
				}

				return false;
			},

			/**
			 * Continue to the next tab.
			 */
			continue: function( button ) {
				const current_tab = this.get_current_tab();
				const next_tab    = this.get_next_tab();

				// Set active tab.
				this.form.querySelector('.davy-donation-form--steps [data-tab=' + current_tab + ']').classList.remove('active');
				this.form.querySelector('.davy-donation-form--steps [data-tab=' + next_tab + ']').classList.add('active');

				// Display active content.
				this.form.querySelector('.davy-donation-form--step-content[data-tab=' + current_tab +']').classList.remove('active');
				this.form.querySelector('.davy-donation-form--step-content[data-tab=' + next_tab +']').classList.add('active');

				return false;
			},

			/**
			 * Handle form submissions.
			 */
			submit: function() {
				let url = 'https://www.sandbox.paypal.com/cgi-bin/webscr?';
				let query = 'business=' + this.get_submitted_value( 'paypal' );
				query += '&email=' + this.get_submitted_value( 'email' );
				query += '&first_name=' + this.get_submitted_value( 'first_name' );
				query += '&last_name=' + this.get_submitted_value( 'last_name' );
				query += '&amount=' + this.get_submitted_amount();

				url += encodeURIComponent( query );

				window.open( url );

				return false;
			},

			/**
			 * Get the submitted amount.
			 */
			get_submitted_amount: function() {
				const suggested = this.form.querySelectorAll('[name=suggested_amount]');
				let amount;

				suggested.forEach( function( suggestion ) {
					if ( suggestion.checked ) {
						amount = suggestion.value;
					}
				} );

				return amount;
			},

			/**
			 * Get the submitted value.
			 */
			get_submitted_value: function( key ) {
				return this.form.querySelector('[name='+key+']').value;
			},

			/**
			 * Get the current tab.
			 */
			get_current_tab: function() {
				return this.form.querySelector('.davy-donation-form--steps li.active').getAttribute('data-tab');
			},

			/**
			 * Get the next tab.
			 */
			get_next_tab: function() {
				return this.form.querySelector('.davy-donation-form--steps li.active').nextSibling.getAttribute('data-tab');
			},

			/**
			 * Set up PayPal.
			 */
			on_paypal_load: function() {
				paypal.Buttons({
					enableStandardCardFields: true,
					createOrder: function(data, actions) {
						// Set up the transaction
						return actions.order.create({
							payer: {
								name: {
									given_name: self.runner.get_submitted_value('first_name'),
									surname: self.runner.get_submitted_value('last_name')
								},
								email_address: self.runner.get_submitted_value('email'),
							},
							purchase_units: [
								{
									amount: {
										value: self.runner.get_submitted_amount(),
										currency_code: self.runner.get_submitted_value('currency')
									}
								}
							]
						});
					},
					onApprove: function(data, actions) {
						return actions.order.capture().then(function(details) {
							console.log(details);
							self.runner.form.classList.add('completed');
							self.runner.form.nextSibling.classList.add('active');
						});
					},
					onCancel: function(data) {
						console.log(data);
					},
					onError: function(err) {
						console.log(err);
					}
				}).render('.davy-donation-form--paypal-button-container');
			},

			/**
			 * This form object.
			 */
			form: form
		};

		continue_btn.addEventListener('click', self.runner, false);
		// return_btn.addEventListener('click', runner, false);
		// donate_btn.addEventListener('click', runner, false);

		return {
			on_paypal_load: self.runner.on_paypal_load
		}
	};

	/**
	 * Set up form.
	 */
	( function( self, Form_Handler ) {
		let paypal_client_id;
		let currency;

		/**
		 * Dynamically load a script.
		 */
		const load_script = function(url, callback) {
			const script = document.createElement('script');

			script.type = 'text/javascript';

			if (script.readyState) {
				script.onreadystatechange = function() {
					if ('loaded' === script.readyState || 'complete' === script.readyState) {
						script.onreadystatechange = null;
						callback();
					}
				}
			} else {
				script.onload = function() {
					callback();
				}
			}

			script.src = url;
			document.getElementsByTagName('head')[0].appendChild(script);
		};

		/**
		 * Load Davy.
		 */
		const load = function() {
			const forms = document.querySelectorAll( '.davy-donation-form' );

			forms.forEach( function( form ) {
				const handler = new Form_Handler( form );
				forms.push = handler;

				if ( ! paypal_client_id ) {
					paypal_client_id = form.querySelector('[name=paypal_client_id]').value;
					currency = form.querySelector('[name=currency]').value;

					load_script('https://www.paypal.com/sdk/js?client-id='+paypal_client_id+'&currency='+currency, function() {
						handler.on_paypal_load();
					});
				}
			} );
		};

		if ( document.readyState != 'loading' ){
			load();
		} else {
			document.addEventListener( 'DOMContentLoaded', load );
		}
	} )( this, Form_Handler );


	return {
		forms: forms,
		Form: Form_Handler
	};
};

window.DAVY = new Davy();