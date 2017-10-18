<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/9/17
 * Time: 11:33 AM
 * Author Reid_Brownell
 * @version 1.0
 */


function dbConnect($usertype, $connectionType = 'mysqli') {
	$host = 'localhost';
	$db = 'reidbrow_port';
	if ($usertype == 'read') {
		$user = 'psread';
		$pwd = 'Bropt3401';
	} elseif ($usertype == 'write') {
		$user = 'pswrite';
		$pwd = 'Bropt3401';
	} else {
		exit('Unrecognized user');
	}
	// Connection code goes here
	if ($connectionType == 'mysqli') {
		$conn = @ new mysqli($host, $user, $pwd, $db);
		if ($conn->connect_error) {
			exit($conn->connect_error);
		}
		return $conn;
	} else {
		try {
			return new PDO("mysql:host=$host;dbname=$db", $user, $pwd);
		} catch (PDOException $e) {
			echo $e->getMessage();
		}

	}
}

/*
function dbConnect($usertype, $connectionType = 'mysqli') {
	$host = 'us87.siteground.us';
	$db = 'reidbrow_port';
	if ($usertype == 'read') {
		$user = 'reidbrow_read';
		$pwd = '[GsyotUM~-=b';
	} else {
		exit('Unrecognized user');
	}
	 //Connection code goes here
	if ($connectionType == 'mysqli') {
		$conn = @ new mysqli($host, $user, $pwd, $db);
		if ($conn->connect_error) {
			exit($conn->connect_error);
		}
		return $conn;
	} else {
		try {
			return new PDO("mysql:host=$host;dbname=$db", $user, $pwd);
		} catch (PDOException $e) {
			echo $e->getMessage();
		}

	}
}
*/