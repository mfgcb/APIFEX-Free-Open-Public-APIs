#-*- coding:utf-8 -*-

# requires requests package --> pip install requests
import requests

payload = { 'address': '1.0.4.1' }
r = requests.post('https://proxydetection.apifex.com/api/v1/detect', json=payload)

print(r.json()['is_proxy'])