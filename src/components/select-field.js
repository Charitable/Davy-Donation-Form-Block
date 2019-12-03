/**
 * WP dependencies.
 */
const { Component } = wp.element;

/**
 * The main donation form block UI.
 */
export default class DavySelectField extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Render the block UI.
	 */
	render() {
		const { field, label, options } = this.props;
		const className = "davy-donation-form--field davy-donation-form--" + field + "-field";

		return (
			<div className={ className }>
				<label>
					{ label }
					<select name={ field }>
						{
							options.map((option) => {
								return (
									<option value={ option.value }>{ option.label }</option>
								);
							})
						}
					</select>
				</label>
			</div>
		);
	}
}
