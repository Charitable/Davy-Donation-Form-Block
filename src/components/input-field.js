/**
 * WP dependencies.
 */
const { Component } = wp.element;

/**
 * The main donation form block UI.
 */
export default class DavyInputField extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render() {
		const { field, label, type } = this.props;
		const className = "davy-donation-form--field davy-donation-form--" + field + "-field";

		return (
			<div className={ className }>
				<label>
					{ label }
					<input type={ type } name={ field } />
				</label>
			</div>
		);
	}
}
