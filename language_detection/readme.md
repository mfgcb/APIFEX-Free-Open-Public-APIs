## Overview
APIFEX language detection is a fully featured open public API for converting pieces of text into information about the used language(s).  It supports 150+ languages and can easily be implemented in many programming languages. Use the interactive API at the bottom of the page to check if your required languages are supported. (Click on any endpoint --> Try it out --> Execute)

API endpoint: https://languagedetection.apifex.com/api/v1/detect (can be used for GET and POST requests)  

## Online Interface

[Click here to visit API, then click 'Try it out'](https://languagedetection.apifex.com/#/API%20methods/detect_language_get_api_v1_detect_get)

## Example

`curl -X GET "https://languagedetection.apifex.com/api/v1/detect?text=Emk%20hra%C3%B0kv%C3%A6%C3%B0r%20hilmi%20at%20m%C3%A6ra%2C%20en%20glapm%C3%A1ll%20of%20gl%C3%B8ggvinga%2C%20opinspjallrof%20j%C7%ABfurs%20d%C3%B4%C3%B0um%2C%20en%20%C3%BEagm%C3%A6lskr%20of%20%C3%BEj%C3%B3%C3%B0lygi." -H  "accept: application/json"`

... or via POST:

`curl -X POST "https://languagedetection.apifex.com/api/v1/detect" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"text\":\"Emk hraðkvæðr hilmi at mæra, en glapmáll of gløggvinga, opinspjallrof jǫfurs dôðum, en þagmælskr of þjóðlygi.\"}"`


The language detection API will correctly recognize this text as being written in icelandic:

```
{
    "main_language_name": "ICELANDIC",
    "main_language_iso": "is",
    "is_reliable": true,
    "text_bytes_found": 121,
    "language_results": [
        {
        "name": "ICELANDIC",
        "iso": "is",
        "confidence": 99,
        "score": 435
        },
        ...
    ]
}
```

[Try in browser with GET request](https://languagedetection.apifex.com/api/v1/detect?text=Emk%20hra%C3%B0kv%C3%A6%C3%B0r%20hilmi%20at%20m%C3%A6ra%2C%20en%20glapm%C3%A1ll%20of%20gl%C3%B8ggvinga%2C%20opinspjallrof%20j%C7%ABfurs%20d%C3%B4%C3%B0um%2C%20en%20%C3%BEagm%C3%A6lskr%20of%20%C3%BEj%C3%B3%C3%B0lygi.)

## Limits

Rate limits are enforced in order to ensure fair usage for a maximum number of clients. Requests that exceed the rate limits will return a HTTP status code 429 - Too Many Requests. No further action is required if these limits are hit, they are reset after a short period of time.  

Per IP rate limits allow 1 request per second per unique IP address (plus a maximum burst of 5 requests). Add a one second delay after each request to be on the safe side.

Global rate limits allow 1000 requests per second from all clients combined. This means that the API will handle at most 1000 requests per second at any given time.

Text requests are limited to 1024 characters. Requests with text fields larger than 1024 characters will return an HTTP status code 422 - Unprocessable Entity. 

Rate limits may be adapted without further notice.

## Disclaimer
This API is free to use until further notice. If it has to be shut down for whatever reason, end of life will announced in this documentation and by the appearance of the 'eol' (end of life) field in API responses. This field will contain the scheduled date and time of shutdown.  

Under no circumstances and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall the provider of this API be liable to any person for any direct, indirect, special, incidental, or consequential damages of any character arising as a result of the use of this service including, without limitation, damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses.  

The user of this service agrees to indemnify the provider of this API and its officers, directors, employees and agents for, and to hold them harmless against, any loss, liability or expense incurred without negligence, bad faith or willful misconduct on the part of the provider, arising out of or in connection with the use of this service, including the costs and expenses of defending itself against any claim or liability in connection with the exercise or performance of any of its powers or duties hereunder and including the reasonable fees and expenses of its counsel.

## Contact
by mail: [info-ld@apifex.com](mailto:info-ld@apifex.com)