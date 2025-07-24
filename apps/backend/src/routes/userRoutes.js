// const express = require('express');
import express from "express";
const router = express.Router();
// const User = require('../models/User');
// import User from '../models/User.js'
import { authOptional } from "../middlewares/authMiddleware.js";
import {
  submitFormResponse,
} from "../controllers/userController.js";
import { upload } from "../middlewares/upload.js";

router.post('/submit-form-response/:formId', upload, authOptional, submitFormResponse);


export default router;
