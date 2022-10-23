<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (isset($_POST['token'])) {

        # BEGIN Setting reCaptcha v3 validation data
        $url = "https://www.google.com/recaptcha/api/siteverify";
        $data = [
            'secret' => "6Lfc564hAAAAAMxfZBhJ9DBG3smlpKtA1UI8Ei36",
            'response' => $_POST['token'],
            'remoteip' => $_SERVER['REMOTE_ADDR']
        ];

        $options = array(
            'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
            )
            );

        # Creates and returns stream context with options supplied in options preset
        $context  = stream_context_create($options);
        # file_get_contents() is the preferred way to read the contents of a file into a string
        $response = file_get_contents($url, false, $context);
        # Takes a JSON encoded string and converts it into a PHP variable
        $res = json_decode($response, true);
        # END setting reCaptcha v3 validation data


        if ($res['success'] == true && $res['score'] >= 0.6 && $res['action'] == $_POST['action']) {

            $to = "info@ppm-cr.com"; // this is your Email address
            $from = $_POST['email']; // this is the sender's Email address
            $name = $_POST['name'];
            $phone = $_POST['phone'];
            $project = $_POST['project'];

            $subject = "Form submission";
            // $subject2 = "Copy of your form submission";
            $message = "\n\nInformation from client" . "\nEmail: " . $from . "\nName: " . $name . "\nPhone: " .$phone . " \Project: " . $project;
            // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

            $headers = "From:" . $from;
            // $headers2 = "From:" . $to;
            mail($to,$subject,$message,$headers);
        }

        $ip = $_SERVER['REMOTE_ADDR'];
        $sucess = $res['success'];

        $isset =  "sucess: $sucess.";
    }

    else {

    }

}

header('Content-Type: application/json');
echo json_encode(array('status' => $sucess));
exit;