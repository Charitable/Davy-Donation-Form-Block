/**
 * WP dependencies.
 */
const { Component } = wp.element;

/**
 * Davy components
 */
import DavyInputField from '../components/input-field';

/**
 * The main donation form block UI.
 */
export default class DavyEmailField extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render( p ) {
		this.props.type = 'email';

		return <DavyInputField { ...this.props } />;
	}
}
