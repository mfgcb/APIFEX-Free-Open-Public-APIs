## Overview
APIFEX proxy detection is an open public API that lets the user find out whether an IP address belongs to a proxy network (or server farm) or is a privately owned address from a direct connection.

API endpoint: https://proxydetection.apifex.com/api/v1/detect (can be used for GET and POST requests)  

## Online Interface

[Click here to visit API, then click 'Try it out'](https://proxydetection.apifex.com/#/API%20methods/detect_proxy_get_api_v1_detect_get)

## Example

`curl -X GET "https://proxydetection.apifex.com/api/v1/detect" -H  "accept: application/json"`

... or via POST:

`curl -X POST "https://proxydetection.apifex.com/api/v1/detect" -H  "Content-Type: application/json" -d "{\"address\":\"1.0.4.1\"}"`

[Try in browser (your address)](https://proxydetection.apifex.com/api/v1/detect) [Try in browser (some proxy address)](https://proxydetection.apifex.com/api/v1/detect?address=1.0.4.1)

The proxy detection API will return whether this address belongs to a proxy and from which country the user is most likely connecting.

```
{
    "country": "AU",
    "address": "1.0.4.1",
    "is_proxy": true
}
```

## Limits

Per IP rate limits allow 1 request per second per unique IP address (plus a maximum burst of 5 requests).  
Requests that exceed the rate limits will return a HTTP status code 429 - Too Many Requests.  
Rate limits may be adapted without further notice.  
Endpoints can be accessed via HTTPS (recommended) or HTTP to reduce overhead from encryption.  

## Disclaimer

This API is free to use until further notice. If it has to be shut down for whatever reason, end of life will announced in this documentation and by the appearance of the 'eol' (end of life) field in API responses. This field will contain the scheduled date and time of shutdown.  

Under no circumstances and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall the provider of this API be liable to any person for any direct, indirect, special, incidental, or consequential damages of any character arising as a result of the use of this service including, without limitation, damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses.  

The user of this service agrees to indemnify the provider of this API and its officers, directors, employees and agents for, and to hold them harmless against, any loss, liability or expense incurred without negligence, bad faith or willful misconduct on the part of the provider, arising out of or in connection with the use of this service, including the costs and expenses of defending itself against any claim or liability in connection with the exercise or performance of any of its powers or duties hereunder and including the reasonable fees and expenses of its counsel.

## Contact
by mail: [info-pd@apifex.com](mailto:info-pd@apifex.com)