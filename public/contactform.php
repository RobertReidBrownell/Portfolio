<?php
//Creating the code for the Ajax request to send a contact form

if(isset($_POST)){
	$recipient="reid@reidbrownell.com";
	$subject="Contact Form";
	$senderName = trim(htmlentities($_POST["name"]));
	$senderEmail = trim(htmlentities($_POST["email"]));
	$senderMessage = trim(htmlentities($_POST["message"]));
	$mailheader = "From: contactform@reidbrownell.com";

	$mailBody="Name: $senderName\n Email:$senderEmail\n Message:$senderMessage";

	mail($recipient, $subject, $mailBody, $mailheader);
}