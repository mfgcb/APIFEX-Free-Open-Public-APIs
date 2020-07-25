## Overview
APIFEX phone number validation is an open public API for getting information about supplied phonenumbers.  

For instance: Is a phone number valid? Which country is it from? What type of number is it?

API endpoint: https://phonenumbervalidation.apifex.com/api/v1/validate (can be used for GET and POST requests)  

## Online Interface

[Click here to visit API, then click 'Try it out'](https://phonenumbervalidation.apifex.com/#/API%20methods/validate_phonenumber_get_api_v1_validate_get)

## Example

`curl -X GET "https://phonenumbervalidation.apifex.com/api/v1/validate?phonenumber=%2B1%20650-253-0000" -H  "accept: application/json"`

... or via POST:

`curl -X POST "https://phonenumbervalidation.apifex.com/api/v1/validate" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"phonenumber\":\"+1 650-253-0000\"}"`

[Try in browser](https://phonenumbervalidation.apifex.com/api/v1/validate?phonenumber=%2B1%20650-253-0000)

The phone number validation API will correctly return this phone number as to be valid and from the US:

```
{
    "is_valid_number": true,
    "is_possible_number": true,
    "format_number_e164": "+16502530000",
    "format_number_international": "+1 650-253-0000",
    "description_for_number": "Mountain View, CA",
    "country_name_for_number": "United States",
    "region_code_for_number": "US",
    "name_for_number": "",
    "time_zones_for_number": [
        "America/Los_Angeles"
    ],
    "number_type": "2",
    "local_time": "2020-07-21T10:27:09.068985-07:00"
}
```

## Limits

Per IP rate limits allow 1 request per second per unique IP address (plus a maximum burst of 5 requests).  
Requests that exceed the rate limits will return a HTTP status code 429 - Too Many Requests.  
Phone number requests are limited to 1024 characters. Requests with phonenumber fields larger than 1024 characters will return an HTTP status code 422 - Unprocessable Entity.  
Rate limits may be adapted without further notice.  
Endpoints can be accessed via HTTPS (recommended) or HTTP to reduce overhead from encryption.  

## Disclaimer

This API is free to use until further notice. If it has to be shut down for whatever reason, end of life will announced in this documentation and by the appearance of the 'eol' (end of life) field in API responses. This field will contain the scheduled date and time of shutdown.  

Under no circumstances and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall the provider of this API be liable to any person for any direct, indirect, special, incidental, or consequential damages of any character arising as a result of the use of this service including, without limitation, damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses.  

The user of this service agrees to indemnify the provider of this API and its officers, directors, employees and agents for, and to hold them harmless against, any loss, liability or expense incurred without negligence, bad faith or willful misconduct on the part of the provider, arising out of or in connection with the use of this service, including the costs and expenses of defending itself against any claim or liability in connection with the exercise or performance of any of its powers or duties hereunder and including the reasonable fees and expenses of its counsel.

## Contact
by mail: [info-pnv@apifex.com](mailto:info-pnv@apifex.com)