<?php
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'http://languagedetection.apifex.com/api/v1/detect');
curl_setopt($curl, CURLOPT_POST, 1);

$data = json_encode(array('text' => 'Как весело, обув железом острым ноги, Скользить по зеркалу стоячих, ровных рек!'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$output = json_decode(curl_exec($curl));

curl_close($curl);

echo $output->main_language_name;



