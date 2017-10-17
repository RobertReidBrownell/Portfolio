<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 9/11/17
 * Time: 2:33 PM
 */

// Define the core paths
// Define them as absolute paths to make sure that require_once works as expected

// DIRECTORY_SEPARATOR is a PHP pre-defined constant
// (\ for Windows, / for Unix)
/*
defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);

defined('SITE_ROOT') ? null :
	define('SITE_ROOT', DS.'Applications'.DS.'XAMPP'.DS.'xamppfiles'.DS.'htdocs'.DS.'portfolio');
	//define('SITE_ROOT', DS.'home'.DS.'reidbrow'.DS.'public_html'.DS.'portfolio');

defined('LIB_PATH') ? null : define('LIB_PATH', SITE_ROOT.DS.'includes');

// load basic functions next so that everything after can use them
require_once(LIB_PATH.DS.'functions.php');

// load core objects
require_once(LIB_PATH.DS.'database.php');
*/



// Define the core paths
// Define them as absolute paths to make sure that require_once works as expected

// DIRECTORY_SEPARATOR is a PHP pre-defined constant
// (\ for Windows, / for Unix)
defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);

defined('SITE_ROOT') ? null : define('SITE_ROOT', DS.'home'.DS.'reidbrow'.DS.'public_html');

//Define the path for includes
defined('LIB_PATH') ? null : define('LIB_PATH',  DS.'home'.DS.'reidbrow'.DS.'crap');

// load basic functions next so that everything after can use them
require_once(LIB_PATH.DS.'functions.php');

// load core objects
require_once(LIB_PATH.DS.'database.php');
