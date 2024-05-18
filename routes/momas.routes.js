const express = require("express");
const router = express.Router();
const momasController = require("../controller/momas.controller");

router.post("/auth", momasController.getAuthToken);
router.get("/cred", momasController.getCredentials);
router.get('/profileData', momasController.getInstProfData);
router.get('/dataByDate', momasController.getInstDataByDate);
router.get('/modelData', momasController.getInstDataByModel);
router.get('/energy', momasController.getEnergyDemandData);
router.get('/billing', momasController.getBillingDataAll);
router.get('/accountverify', momasController.verifyAccount)
router.get('/energy_md', momasController.getMdEnergyDemandData)
router.get('/md_data', momasController.getMdData)
router.get('/md_data_range', momasController.getMdDataRange)
// router.post('/payment', momasController.paymentNotification)
router.post('/callAWS', momasController.callAWS)

module.exports = router;
