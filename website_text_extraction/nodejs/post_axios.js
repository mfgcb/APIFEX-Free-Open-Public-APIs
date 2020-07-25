// requires axios module --> npm install axios
const axios = require('axios');

var payload = { 'url': 'https://home.cern/news/news/physics/neutron-stars-show-their-cores' };
axios.post('https://websitetextextraction.apifex.com/api/v1/extract', payload)
.then(function (response) {
  console.log(response.data.extracted_text_length);
});