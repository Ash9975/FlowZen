import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authorized.",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET,
            {
                audience: "flowzen-users",
                issuer: "flowzen",
            }
        );
        const user = await User.findById(
            decoded.id
        ).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            message: " Invalid token."
        })
    }
};

export default protect;