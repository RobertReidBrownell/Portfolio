<?php
//Creating the code for the Ajax request to send a contact form

if($_POST["submit"]) {
	$recipient="reid@reidbrownell.com";
	$subject="Contact Form";
	$senderName = $_POST["fullName"];
	$senderEmail = $_POST["email"];
	$senderMessage = $_POST["message"];
	$mailheader = "From: contactform@reidbrownell.com";

	$mailBody="Name: $senderName\n Email:$senderEmail\n Message:$senderMessage";

	mail($recipient, $subject, $mailBody, $mailheader);

	$thankYou="<p>Thank you! Your message has been sent.</p>";
}