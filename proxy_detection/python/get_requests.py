#-*- coding:utf-8 -*-

# requires requests package --> pip install requests
import requests

payload = None
r = requests.get('https://proxydetection.apifex.com/api/v1/detect', params=payload)

print(r.json()['is_proxy'])