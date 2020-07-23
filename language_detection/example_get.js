const https = require('https');

https.get('https://languagedetection.apifex.com/api/v1/detect?text=%D0%9A%D0%B0%D0%BA%20%D0%B2%D0%B5%D1%81%D0%B5%D0%BB%D0%BE%2C%20%D0%BE%D0%B1%D1%83%D0%B2%20%D0%B6%D0%B5%D0%BB%D0%B5%D0%B7%D0%BE%D0%BC%20%D0%BE%D1%81%D1%82%D1%80%D1%8B%D0%BC%20%D0%BD%D0%BE%D0%B3%D0%B8%2C%20%D0%A1%D0%BA%D0%BE%D0%BB%D1%8C%D0%B7%D0%B8%D1%82%D1%8C%20%D0%BF%D0%BE%20%D0%B7%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D1%83%20%D1%81%D1%82%D0%BE%D1%8F%D1%87%D0%B8%D1%85%2C%20%D1%80%D0%BE%D0%B2%D0%BD%D1%8B%D1%85%20%D1%80%D0%B5%D0%BA%21.%20%E3%81%86%E3%82%89%E3%82%84%E3%81%BE%E3%81%97%20%20%E6%80%9D%E3%81%B2%E5%88%87%E3%82%8B%E6%99%82%20%20%E7%8C%AB%E3%81%AE%E6%81%8B', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data)['main_language_name']);
  });

});