import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import jwt from "jsonwebtoken";
import generateToken from '../utils/generateToken.js'
import { blacklistToken } from "../services/tokenBlacklist.service.js";

export const register = async (req, res) => {
    try {

        const { name, mobile, password } = req.body;

        const existingUser = await User.findOne({ mobile });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Mobile Number already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            mobile,
            password: hashedPassword,
        });
        console.log("Created User:", user);

        res.status(201).json({
            success: true,
            message: "User registered Successfully"
        })
    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Mobile number already exists."
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { mobile, password } = req.body;

        const user = await User.findOne({ mobile }).select('+password');
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid Mobile Number or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Mobile No. or password",
            });
        }

        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
            .status(200)
            .json({
                success: true,
                message: "Login Successful",
                user: {
                    _id: user._id,
                    name: user.name,
                    mobile: user.mobile
                }
            })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: process.env.NODE_ENV === "development" ? error.message : "Login failed"
        });
    }
};

export const logout = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET, {
                    audience: "flowzen-users",
                    issuer: "flowzen",
                });

                // Remaining lifetime of the JWT (in seconds)
                const ttl = Math.max(
                    decoded.exp - Math.floor(Date.now() / 1000),
                    0
                );

                if (ttl > 0) {
                    await blacklistToken(token, ttl);
                }
            } catch (err) {
                console.log("Token already expired.");
            }
        }

        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",
        });

        return res.status(200).json({
            success: true,
            message: "Logout Successful",
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Logout failed",
        });
    }
};

export const getMe = async (req, res) => {

    const safeUser = {
        _id: req.user._id,
        name: req.user.name,
        mobile: req.user.mobile,
    };

    try {
        return res.status(200).json({
            success: true,
            message: "User Profile",
            user: safeUser,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};