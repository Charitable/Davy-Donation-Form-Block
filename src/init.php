<?php
/**
 * Blocks Initializer.
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Davy
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @since  1.0.0
 *
 * @return void
 */
function davy_donation_form_block_assets() {
	// Register block styles for both frontend + backend.
	wp_register_style(
		'davy-donation-form-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		array( 'wp-editor' ),
		null
	);

	// Register block editor script for backend.
	wp_register_script(
		'davy-donation-form-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	// Register block editor styles for backend.
	wp_register_style(
		'davy-donation-form-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'davy-donation-form-block-js',
		'cgbGlobal',
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'davy/donation-form',
		[
			'style'         => 'davy-donation-form-css',
			'editor_script' => 'davy-donation-form-block-js',
			'editor_style'  => 'davy-donation-form-block-editor-css',
		]
	);
}

// Hook: Block assets.
add_action( 'init', 'davy_donation_form_block_assets' );


/**
 * Set up block scripts.
 *
 * This script is used on both the front & backend.
 *
 * @since  1.0.0
 *
 * @return void
 */
function davy_donation_form_script() {
	wp_enqueue_script(
		'davy-donation-form-js',
		plugins_url( '/dist/davy-donation-form.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . '../dist/davy-donation-form.build.js' ),
		true
	);
}

 add_action( 'enqueue_block_assets', 'davy_donation_form_script' );
