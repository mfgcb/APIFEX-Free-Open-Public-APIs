## Overview
APIFEX website text extraction is an open public API that lets the user convert URLs into their contents as plaintext.  

API endpoint: https://websitetextextraction.apifex.com/api/v1/extract (can be used for GET and POST requests)  

## Online Interface

[Click here to visit API, then click 'Try it out'](https://websitetextextraction.apifex.com/#/API%20methods/extract_text_get_api_v1_extract_get)

## Example

`curl -X GET "https://websitetextextraction.apifex.com/api/v1/extract?url=https%3A%2F%2Fhome.cern%2Fnews%2Fnews%2Fphysics%2Fneutron-stars-show-their-cores" -H  "accept: application/json"`

... or via POST:

`curl -X POST "https://websitetextextraction.apifex.com/api/v1/extract" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"url\":\"https://home.cern/news/news/physics/neutron-stars-show-their-cores\"}"`

[Try in browser](https://websitetextextraction.apifex.com/api/v1/extract?url=https%3A%2F%2Fhome.cern%2Fnews%2Fnews%2Fphysics%2Fneutron-stars-show-their-cores)

The website text extraction API will return the content of this site as plaintext (example only shows a part of the text):

```
{
    "website_content_length": 129113,
    "extracted_text_length": 7334,
    "language_code": "en",
    "language_name": "ENGLISH",
    "text": "The theoretical calculations involved describing the state of matter inside a neutron star from the crust all the way down to the centre. To do this, the researchers used so-called equations of state, which relate the pressure of a state of matter to the energy density – the amount of energy packed into a system or region of space per unit volume. The team then plugged two pieces of information from astronomical data into these calculations: the observation that neutron stars can have masses equivalent to two Suns; and the possible values of a property called tidal deformability for a neutron star with a mass of about 1.4 times that of the Sun."
}
```

## Limits

The uncompressed (after gzip, brotli, etc...) content of the requested site must not be larger than 500 000 bytes. Larger requests will return an HTTP status code 413 - Request Entity Too Large.  
If the requested site cannot be loaded within 5000ms an HTTP status code 408 - Request Timeout will be returned.  
Each requested URL will be cached for 10 minutes.  
JavaScript is not rendered when extracting the text.
Per IP rate limits allow 1 request per second per unique IP address (plus a maximum burst of 5 requests).  
Requests that exceed the rate limits will return a HTTP status code 429 - Too Many Requests.  
URLs are limited to 1024 characters. Requests with URL fields larger than 1024 characters will return an HTTP status code 422 - Unprocessable Entity.  
Rate limits may be adapted without further notice.  
Endpoints can be accessed via HTTPS (recommended) or HTTP to reduce overhead from encryption.  

## Disclaimer

This API is free to use until further notice. If it has to be shut down for whatever reason, end of life will announced in this documentation and by the appearance of the 'eol' (end of life) field in API responses. This field will contain the scheduled date and time of shutdown.  

Under no circumstances and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall the provider of this API be liable to any person for any direct, indirect, special, incidental, or consequential damages of any character arising as a result of the use of this service including, without limitation, damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses.  

The user of this service agrees to indemnify the provider of this API and its officers, directors, employees and agents for, and to hold them harmless against, any loss, liability or expense incurred without negligence, bad faith or willful misconduct on the part of the provider, arising out of or in connection with the use of this service, including the costs and expenses of defending itself against any claim or liability in connection with the exercise or performance of any of its powers or duties hereunder and including the reasonable fees and expenses of its counsel.

## Contact
by mail: [info-wte@apifex.com](mailto:info-wte@apifex.com)