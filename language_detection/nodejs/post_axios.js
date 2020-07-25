// requires axios module --> npm install axios
const axios = require('axios');

var payload = { text: 'Emk hraðkvæðr hilmi at mæra, en glapmáll of gløggvinga, opinspjallrof jǫfurs dôðum, en þagmælskr of þjóðlygi.' };
axios.post('https://languagedetection.apifex.com/api/v1/detect', payload)
.then(function (response) {
  console.log(response.data.main_language_name);
});