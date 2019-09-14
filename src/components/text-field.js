/**
 * WP dependencies.
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

/**
 * Davy components
 */
import DavyInputField from '../components/input-field';

/**
 * The main donation form block UI.
 */
export default class DavyTextField extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render( p ) {
		this.props.type = 'text';

		return <DavyInputField { ...this.props } />;
	}
}
