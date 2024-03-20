const express = require("express");
const router = express.Router();
const momasController = require("../controller/momas.controller");

router.post("/auth", momasController.getAuthToken);
router.get("/cred", momasController.getCredentials);

module.exports = router;
