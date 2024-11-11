<?php
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

if (strlen($_GET['name']) >= 2 && strlen($_GET['contact']) >= 1) {
    $symbol = '@';

    $name = $_GET['name'];
    $contact = $_GET['contact'];
    $about = $_GET['about'];

    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@bisonix.com';
    $mail->Password = 'dd34523452';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    if (strripos($emailOrPhone, $symbol)) {
        $mail->setFrom('info@bisonix.com');
        $mail->addAddress($emailOrPhone);
        $mail->isHTML(true);

        $mail->Subject = 'Answer from Bisonix.com';
        $mail->Body    = 'Your message has been successfully sent!';
        $mail->AltBody = '';

        // $mail->send();
        $mail->clearAddresses();
    }

    // $mail->setFrom('info@bisonix.com');
    // $mail->addAddress('ds@bisonix.com');
    // $mail->isHTML(true);

    // $mail->Subject = 'Request from Bisonix.com';
    // $mail->Body    = 'Name: ' . $name . ', email or phone number: ' . $contact . ' , comment: ' . $about;
    // $mail->AltBody = '';

    // $mail->setFrom('info@bisonix.com');
    // $mail->addAddress('info@bisonix.com');
    // $mail->isHTML(true);

    // if (!$mail->send()) {
    //     $redicet = $_SERVER['HTTP_REFERER'];
    //     @header("Location: $redicet");
    // } else {
    //     $redicet = $_SERVER['HTTP_REFERER'];
    //     @header("Location: $redicet");
    // }
}
// $redicet = $_SERVER['HTTP_REFERER'];
@header("Location: $redicet");