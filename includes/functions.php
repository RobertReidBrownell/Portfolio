<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 9/11/17
 * Time: 2:48 PM
 */

/*
function include_layout_template($template="") {
	include(SITE_ROOT.DS.'public'.DS.'layouts'.DS.$template);
}
*/

function include_layout_template($template="") {
	include(SITE_ROOT.DS.'layouts'.DS.$template);
}
