<?php

// var_dump($_POST);

$name = htmlspecialchars($_POST["name-service"]);
$mes = htmlspecialchars($_POST["email-service"]);
$email = htmlspecialchars($_POST["message-service"]);

$to = "frontend-ninja@yandex.ru";
$subject = "Сообщение с сайта webdevelopmentworld.ru";
$message = 
"
<strong>Имя:</strong> $name;<br>
<strong>Телефон:</strong> $mes;<br>   
<strong>Email:</strong> $email.
";


$headers =
           'From: Получено новое сообщение с сайта webdevelopmentworld.ru <webmaster@server42.hosting.reg.ru>' . "\r\n" . 
           'Reply-To: frontend-ninja@yandex.ru' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n" . 
           'Content-Transfer-Encoding: 8bit' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);