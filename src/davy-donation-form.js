const Davy = function() {
	const forms = [];

	/**
	 * Form object.
	 */
	this.form = function( form ) {
		const continue_btn = form.querySelector( '.davy-donation-form--continue-button' );
		const return_btn = form.querySelector( '.davy-donation-form--return-button' );
		const donate_btn = form.querySelector( '.davy-donation-form--donate-button' );
		const runner = {

			/**
			 * Event handler. This is the event listener for all the button
			 * click actions. It checks the targets and then routes to the
			 * correct function.
			 */
			handleEvent: function( e ) {
				console.log(e.target);
				switch ( e.target ) {
					case donate_btn:
						return this.submit();
						break;
				}

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
			 * This form object.
			 */
			form: form
		};

		continue_btn.addEventListener('click', runner, false);
		return_btn.addEventListener('click', runner, false);
		donate_btn.addEventListener('click', runner, false);
	};

	/**
	 * Set up form.
	 */
	( function( self ) {
		const load = function() {
			const forms = document.querySelectorAll( '.davy-donation-form' );

			forms.forEach( function( form ) {
				forms.push = self.form( form );
			} );
		};

		if ( document.readyState != 'loading' ){
			load();
		} else {
			document.addEventListener( 'DOMContentLoaded', load );
		}
	} )( this );


	return {
		forms: forms,
		Form: this.form
	};
};

window.DAVY = new Davy();