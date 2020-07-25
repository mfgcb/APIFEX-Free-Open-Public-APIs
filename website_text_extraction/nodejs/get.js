const https = require('https');

https.get('https://websitetextextraction.apifex.com/api/v1/extract?url=https%3A%2F%2Fhome.cern%2Fnews%2Fnews%2Fphysics%2Fneutron-stars-show-their-cores', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data)['extracted_text_length']);
  });

});