#-*- coding:utf-8 -*-

# requires requests package --> pip install requests
import requests

payload = {'text': u'Emk hraðkvæðr hilmi at mæra, en glapmáll of gløggvinga, opinspjallrof jǫfurs dôðum, en þagmælskr of þjóðlygi.'}
r = requests.get('https://languagedetection.apifex.com/api/v1/detect', params=payload)

print(r.json()['main_language_name'])