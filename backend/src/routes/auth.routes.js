import express from 'express';
import {register , login , logout, getMe} from '../controllers/auth.controller.js';

import protect from '../middlewares/auth.middleware.js';
import authLimiter from "../middlewares/authLimiter.js";
import validate from "../middlewares/validate.middleware.js";

import {
  registerSchema,
  loginSchema,
} from "../validators/auth.validator.js";

const router = express.Router();

router.get("/test", (req, res)=>{
    res.json({
        success:true,
        message:"Auth route is working"
    });
});

router.post( "/register",authLimiter,validate(registerSchema),register);
router.post("/login", authLimiter,validate(loginSchema), login);
router.get("/me",protect,getMe);
router.post("/logout",logout);

export default router;