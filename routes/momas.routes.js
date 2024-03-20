const express = require('express');
const router = express.Router();
const momasController = require('../controller/momas.controller')

router.post('/momas/auth', momasController.getAuthToken);