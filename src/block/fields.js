const { __ } = wp.i18n; // Import __() from wp.i18n

const DefaultFields = [
	{
		key: 'email',
		type: 'email',
		label: __( 'Email Address' ),
		required: true,
		section: 'user',
		priority: 2
	},
	{
		key: 'first_name',
		type: 'text',
		label: __( 'First Name' ),
		required: true,
		section: 'user',
		priority: 4
	},
	{
		key: 'last_name',
		type: 'text',
		label: __( 'Last Name' ),
		required: true,
		section: 'user',
		priority: 6
	}
];

export default DefaultFields;