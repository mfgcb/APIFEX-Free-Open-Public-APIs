const https = require('https');

https.get('https://proxydetection.apifex.com/api/v1/detect?address=1.0.4.1', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    data = JSON.parse(data);
    console.log( 'The address ' + data.address + ' is a proxy: ' + data.is_proxy);
  });

});