const axios = require("axios");

// Replace these placeholders with actual values
const merchantId = 101;
const password = 123456;

const endpoint = "http://41.216.166.163:8080/memmcol-ami-service/api/auth/";

// Data to send in the POST request, if needed
const postData = {
  // Add your POST data here if needed
};

// Function to get authentication token
async function getAuthToken() {
  console.log('works')
  try {
    const response = await axios.post(`${endpoint}/${merchantId}/${password}`, postData);
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

async function getCredentials() {
  console.log('cred')
  try {
    const response = await axios.post(`${endpoint}/${merchantId}`, postData);
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

http://41.216.166.163:59216/memmcol-ami-service/api/auth/{merchant_id}

module.exports = {
  getAuthToken,
  getCredentials,
}
