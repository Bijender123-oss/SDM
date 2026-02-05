const axios = require('axios');

axios.get('http://localhost:5000/complaints')
  .then(response => {
    console.log('Response from server:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Axios error:', error.message);
  });
