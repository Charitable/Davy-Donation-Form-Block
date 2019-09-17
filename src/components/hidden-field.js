/**
 * WP dependencies.
 */
const { Component } = wp.element;

/**
 * The main donation form block UI.
 */
export default class DavyHiddenield extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render() {
		const { props } = this;
		const { name, value } = props;

		return (
			<input type="hidden" name={ name } value={ value } />
		);
	}
}
