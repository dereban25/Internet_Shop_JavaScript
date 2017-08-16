<?php
//read JSON file
$json = file_get_contents('../goods.json');
$json = json_decode($json,true);

//mail
$message='';
$message .='<h1>Order in shop</h1>';
$message .='<p>Phone: '.$_POST['ephone'].'</p>';
$message .='<p>Mail: '.$_POST['email'].'</p>';
$message .='<p>Client: '.$_POST['ename'].'</p>';

$cart = $_POST['cart'];

foreach ($cart as $id=>$count){
  //  $message .=$json[$id]['name'];
}
print_r($message);