// requires axios module --> npm install axios
const axios = require('axios');

var payload = { phonenumber: '+1 650-253-0000' };
axios.post('https://phonenumbervalidation.apifex.com/api/v1/validate', payload)
.then(function (response) {
  console.log(response.data.is_valid_number);
});