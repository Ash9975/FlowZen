import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
      index: true
    },

    orderDate: {
      type: Date,
      default: Date.now,
    },

    uploadedFileUrl: {
      type: String,
      default: null,
    },

    fileType: {
      type: String,
      default: null,
    },

    processed: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "in-progress",
        "completed",
      ],
      default: "pending",
    },

    progress: {
      type: Number,
      default: 0,
    },

    totalItems: {
      type: Number,
      default: 0,
    },

    completedItems: {
      type: Number,
      default: 0,
    },

    completedAt: {
      type: Date,
      default: null,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

  },
  {
    timestamps: true,
  }
);
orderSchema.index({
  owner: 1,
  createdAt: -1,
});

orderSchema.index({
  customerName: "text",
});

const Order = mongoose.model("Order", orderSchema);

export default Order;