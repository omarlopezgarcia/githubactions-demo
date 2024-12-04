const axios = require('axios');

async function fetchUserData(userId) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
}

module.exports = { fetchUserData };
