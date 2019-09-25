/**
 * WP dependencies.
 */
const { Component } = wp.element;

/**
 * The main donation form block UI.
 */
export default class DavyHiddenField extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render() {
		const { name, value } = this.props;

		return (
			<input type="hidden" name={ name } value={ value } />
		);
	}
}
