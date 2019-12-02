<?php
return [
	[
		'key'      => 'email',
		'type'     => 'email',
		'label'    => __( 'Email Address', 'davy' ),
		'required' => true,
		'section'  => 'user',
		'priority' => 2,
	],
	[
		'key'      => 'first_name',
		'type'     => 'text',
		'label'    => __( 'First Name', 'davy' ),
		'required' => true,
		'section'  => 'user',
		'priority' => 4,
	],
	[
		'key'      => 'last_name',
		'type'     => 'text',
		'label'    => __( 'Last Name', 'davy' ),
		'required' => true,
		'section'  => 'user',
		'priority' => 6,
	],
];
