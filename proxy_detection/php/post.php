<?php
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://proxydetection.apifex.com/api/v1/detect');
curl_setopt($curl, CURLOPT_POST, 1);

$data = json_encode(array('address' => '1.0.4.1'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$output = json_decode(curl_exec($curl));

curl_close($curl);

echo $output->is_proxy;



