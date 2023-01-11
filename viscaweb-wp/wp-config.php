<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'viscaweb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'zz%ru;069Er-o?xZFx^JN]|m*7t_}L{YGXi_A3Z5:v|BY#f: CSi4a0V[sf=2UA7' );
define( 'SECURE_AUTH_KEY',  '-=?CyAhAM2M^g-.`crMD;Z?dd|vjCy>sm^h4$vIy}ks,]w^cfE<BL4H)]N0$:]ty' );
define( 'LOGGED_IN_KEY',    ' DS$Eu(}ut;I$v:GF7tlc?Hb9UI-oz_&6`[)/hf,!2Re),7i*|Bz6X2{0RfQ(;LP' );
define( 'NONCE_KEY',        '-%ey,s?65QbfV|EoeR^Hm{O({nZsFkFWLMaEmu=dZ]5T+qj~&)]i:+OsdfLQZ0g0' );
define( 'AUTH_SALT',        'S8cboa5G9?U@|=YP|3+nOWD|DPAjUk^*>QFdEnMhFrc]~n>0@h0Q`^]4PtH2RnWw' );
define( 'SECURE_AUTH_SALT', 'Opw}1tn{F;W?N?T0K<1poU~,O^l/ofI%?[xqzSFF,>im_OSKZ1vGG1UV,L.dx9-T' );
define( 'LOGGED_IN_SALT',   'Y0~F?LGS]~Dcb}YDv1-+nuRsQFpCSN9u60N:Q1:UQKvT@NAC?]x3k/#UD*T:dc}J' );
define( 'NONCE_SALT',       '!Ezn`T)SV-n$@c}lN$=_CKT07qQ^Sn @>3HcI0EWN9.?_F,/2Vs`~%&V6YsN!j~%' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
