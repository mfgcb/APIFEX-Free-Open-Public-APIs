
const axios = require('axios');

var payload = { text: 'Emk hraðkvæðr hilmi at mæra, en glapmáll of gløggvinga, opinspjallrof jǫfurs dôðum, en þagmælskr of þjóðlygi.' };
axios.post('https://languagedetection.apifex.com/api/v1/detect', payload)
.then(function (response) {
  console.log(response.data.main_language_name);
});


// const https = require('https');

// var postData = JSON.stringify({
//   'text' : 'Emk hraðkvæðr hilmi at mæra, en glapmáll of gløggvinga, opinspjallrof jǫfurs dôðum, en þagmælskr of þjóðlygi.'
// });

// var options = {
//   hostname: 'languagedetection.apifex.com',
//   port: 443,
//   path: '/api/v1/detect',
//   method: 'POST',
//   headers: {
//         'Content-Type': 'application/json',
//         // 'Content-Length': postData.length
//      }
// };

// https.get(options, (resp) => {
//   let data = '';

//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   resp.on('end', () => {
//     console.log(data);
//     console.log(JSON.parse(data)['main_language_name']);
//   });

// });