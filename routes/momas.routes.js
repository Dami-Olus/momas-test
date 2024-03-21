const express = require("express");
const router = express.Router();
const momasController = require("../controller/momas.controller");

router.post("/auth", momasController.getAuthToken);
router.get("/cred", momasController.getCredentials);
router.get('/profileData', momasController.getInstProfData);
router.get('/dataByDate', momasController.getInstDataByDate);
router.get('/modelData', momasController.getInstDataByModel);


module.exports = router;
