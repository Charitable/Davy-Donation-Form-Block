const { __ } = wp.i18n; // Import __() from wp.i18n

const DefaultSections = [
	{
		key: 'amount',
		label: __( 'Amount' ),
		default_section: true
	},
	{
		key: 'user',
		label: __( 'Details' ),
		default_section: false
	}
];

export default DefaultSections;