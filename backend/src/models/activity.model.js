import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(

    {

        owner: {
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
                "order-created",
                "packing-started",
                "order-completed",
                "order-deleted",
            ],
            required: true,
        },

        customerName: {
            type: String,
            required: true,
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