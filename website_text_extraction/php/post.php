<?php
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, 'https://websitetextextraction.apifex.com/api/v1/extract');
curl_setopt($curl, CURLOPT_POST, 1);

$data = json_encode(array('url' => 'https://home.cern/news/news/physics/neutron-stars-show-their-cores'));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$output = json_decode(curl_exec($curl));

curl_close($curl);

echo $output->extracted_text_length;



