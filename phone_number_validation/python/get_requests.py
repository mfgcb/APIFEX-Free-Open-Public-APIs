#-*- coding:utf-8 -*-

# requires requests package --> pip install requests
import requests

payload = {'phonenumber': '+1 650-253-0000'}
r = requests.get('https://phonenumbervalidation.apifex.com/api/v1/validate', params=payload)

print(r.json()['is_valid_number'])