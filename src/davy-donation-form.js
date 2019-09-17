const Davy = function() {
	const forms = [];

	/**
	 * Form object.
	 */
	this.form = function( form ) {
		const continue_btn = form.querySelector( '.davy-donation-form--continue-button' );
		const return_btn = form.querySelector( '.davy-donation-form--return-button' );
		const donate_btn = form.querySelector( '.davy-donation-form--donate-button' );

		donate_btn.addEventListener('click', function() {
			console.log('clicked donate');
			return false;
		});
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