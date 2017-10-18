<?php

require_once '/portfolio/includes/initialize.php';
include_layout_template('header.php');
require_once(LIB_PATH.DS.'menu.php');
$conn = dbConnect('read');

include ("goodfit.php");
include ("portfolio.php");
include ("skills.php");
include ("whoam.php");
include ("contact.php");

include_layout_template('footer.html');






