const axios = require("axios");

// Replace these placeholders with actual values
const merchantId = 101;
const password = 123456;
const authToken = "FD1C26E8D2C78A42465E90D855A0B5C1";

const endpoint = "http://41.216.166.163:8080/memmcol-ami-service/api/auth/";

const endpointAll =
  "http://41.216.166.163:8080/memmcol-ami-service/api/profile/all/ldpi/";

const endpointRange =
  "http://41.216.166.163:8080/memmcol-ami-service/api/profile/range/ldpi/";

const endpointEnergyAll = 'http://41.216.166.163:8080/memmcol-ami-service/api/profile/all/ldpd/';

const endpointBillingAll = 'http://41.216.166.163:8080/memmcol-ami-service/api/profile/all/debd/'

let startDate = "2024-02-13";
let endDate = "2024-02-21";
let meterModel = 1;

// Data to send in the POST request, if needed
const postData = {
  // Add your POST data here if needed
};

// Function to get authentication token
async function getAuthToken() {
  console.log("works");
  try {
    const response = await axios.post(
      `${endpoint}${merchantId}/${password}`,
      postData
    );
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

async function getCredentials() {
  console.log("cred");
  try {
    const response = await axios.get(`${endpoint}${merchantId}`, postData);
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

async function getInstProfData() {
  console.log("profData");
  try {
    const response = await axios.get(
      `${endpointAll}${merchantId}/${authToken}`,
      postData
    );
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

async function getInstDataByDate() {
  console.log("dataByDate");
  try {
    const response = await axios.get(
      `${endpointRange}${merchantId}/${authToken}/${startDate}/${endDate}`,
      postData
    );
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

async function getInstDataByModel() {
  console.log("modelData");
  try {
    const response = await axios.get(
      `${endpointAll}${merchantId}/${authToken}/${meterModel}`,
      postData
    );
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}



async function getEnergyDemandData() {
  console.log("energyData");
  try {
    const response = await axios.get(
      `${endpointEnergyAll}${merchantId}/${authToken}`,
      postData
    );
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}

async function getBillingDataAll() {
  console.log("billingData");
  try {
    const response = await axios.get(
      `${endpointBillingAll}${merchantId}/${authToken}`,
      postData
    );
    console.log("Response:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow error for further handling if needed
  }
}



module.exports = {
  getAuthToken,
  getCredentials,
  getInstProfData,
  getInstDataByDate,
  getInstDataByModel,
  getEnergyDemandData,
  getBillingDataAll,
};
