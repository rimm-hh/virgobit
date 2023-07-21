<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Build email message
    $to = "amirhoseinsafari42@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        // Email sent successfully
        echo "Thank you for contacting us. We'll get back to you soon.";
    } else {
        // Email failed to send
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
}
?>