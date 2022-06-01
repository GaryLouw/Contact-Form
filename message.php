<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $reciever = "glouw79@gmail.com";
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email";
            if(mail($reciever, $subject, $body, $sender)){
                echo "Your message has been sent!";
            }else{
                echo "Sorry! Failed to send your message!";
            }
        }else{
            echo "Enter a valid email!";
        }
    }else{
        echo "Fields are required!";
    }
?>