#-*- coding:utf-8 -*-

# requires requests package --> pip install requests
import requests

payload = { 'url': 'https://home.cern/news/news/physics/neutron-stars-show-their-cores' }
r = requests.get('https://websitetextextraction.apifex.com/api/v1/extract', params=payload)

print(r.json()['extracted_text_length'])