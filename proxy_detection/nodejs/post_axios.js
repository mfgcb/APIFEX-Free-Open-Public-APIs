// requires axios module --> npm install axios
const axios = require('axios');

var payload = { 'address': '1.0.4.1' };
axios.post('https://proxydetection.apifex.com/api/v1/detect', payload)
.then(function (response) {
  console.log( 'The address ' + response.data.address + ' is a proxy: ' + response.data.is_proxy);
});