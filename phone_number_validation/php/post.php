<?php
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://phonenumbervalidation.apifex.com/api/v1/validate');
curl_setopt($curl, CURLOPT_POST, 1);

$data = json_encode(array('phonenumber' => '+1 650-253-0000'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$output = json_decode(curl_exec($curl));

curl_close($curl);

echo $output->is_valid_number;



