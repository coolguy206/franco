<?php 
if(isset($_POST['email'])){
    $to = "davidthanphilom@msn.com"; // this is your Email address
    $email = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $purpose = $_POST['purpose'];
    $subject = "NEW Email from your website, the purpose: " . $purpose . " from: " . $name;
    $message = $_POST['message'];
    $body = "Name: " . $name . "\n\n" . "Email: " . $email . "\n\n" . "Phone: " . $phone . "\n\n" . "Message: " . "\n\n" . $message;

    //$headers = "From: " . $email;
    // $headers = array(
    //     'From' => $email,
    //     'Reply-To' => $email,
    //     'X-Mailer' => 'PHP/' . phpversion()
    // );
    mail($to, $subject, $body);

    echo "success";

    // echo "Mail Sent. Thank you " . $name . ", we will contact you shortly." . "\n\n" . "This is your message: " . "\n\n" . $body;
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>