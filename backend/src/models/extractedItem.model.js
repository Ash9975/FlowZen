import mongoose from "mongoose";

const extractedItemSchema =
  new mongoose.Schema(
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
      },

      quantity: {
        type: Number,
        default: 1,
      },

      unit: {
        type: String,
        default: "pcs",
      },
    },
    {
      timestamps: true,
    }
  );

extractedItemSchema.index({
  order: 1,
});

export default mongoose.model(
  "ExtractedItem",
  extractedItemSchema
);