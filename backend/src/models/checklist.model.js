import mongoose from "mongoose";

const checklistSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true,
    },

    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    unit: {
      type: String,
      default: "pcs",
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

checklistSchema.index({
  order: 1,
  completed: 1,
});

export default mongoose.model(
  "Checklist",
  checklistSchema
);