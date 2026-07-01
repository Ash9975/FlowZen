import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },

        type: {
            type: String,
            enum: [
                "created",
                "updated",
                "completed",
                "deleted",
                "ai",
            ],
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model(
    "Activity",
    activitySchema
);