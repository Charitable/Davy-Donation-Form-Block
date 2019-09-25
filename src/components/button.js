/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * The button UI.
 */
export default class DavyButton extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render() {
		const { classes, text, name } = this.props;

		let className = classes + " davy-donation-form--button";

		return (
			<button className={ className } name={ name }>{ text }</button>
		);
	}
}
