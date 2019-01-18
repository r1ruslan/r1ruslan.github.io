<?php

$name = $_POST['name'];
$phone = $_POST['phone'];


if (mail("codeez33@gmail.com", "Заказ с сайта", "Имя:".$name". Номер: ".$phone ,"From: example2@mail.ru \r\n"))
 { 
    echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки"; 
}