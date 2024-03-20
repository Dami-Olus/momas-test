const axios = require("axios");

// Replace these placeholders with actual values
const merchantId = 101;
const password = 123456;

const endpoint = `http://41.216.166.163:59216/memmcol-ami-service/api/auth/${merchantId}/${password}`;

// Data to send in the POST request, if needed
const postData = {
  // Add your POST data here if needed
};

function getAuthToken() {
  axios
    .post(endpoint, postData)
    .then((response) => {
      // Handle successful response
      console.log("Response:", response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error:", error);
    });
}

module.exports = {
  getAuthToken,
}
