#-*- coding:utf-8 -*-

# requires requests package --> pip install requests
import requests

payload = { 'url': 'https://home.cern/news/news/physics/neutron-stars-show-their-cores' }
r = requests.post('https://websitetextextraction.apifex.com/api/v1/extract', json=payload)

print(r.json()['extracted_text_length'])