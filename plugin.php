<?php
/**
 * Plugin Name: Davy Donation Form Block
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: The super simple donation form block by the creators of Charitable.
 * Author: ericdaams, wpcharitable
 * Author URI: https://www.wpcharitable.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Davy
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
