const https = require('https');

https.get('https://phonenumbervalidation.apifex.com/api/v1/validate?phonenumber=%2B1%20650-253-0000', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data)['is_valid_number']);
  });

});