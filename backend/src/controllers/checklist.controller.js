import Checklist from "../models/checklist.model.js";
import Order from "../models/order.model.js";
import recalculateOrder from "../utils/recalculateOrder.js";

export const createChecklistItem = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { itemName, quantity, unit } = req.body;

    const order = await Order.findOne({
      _id: orderId,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (!itemName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Item name is required",
      });
    }

    if (order.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Completed orders cannot be modified.",
      });
    }

    const item = await Checklist.create({
      order: orderId,
      itemName: itemName.trim(),
      quantity,
      unit,
    });

    const updatedOrder = await recalculateOrder(orderId);

    return res.status(201).json({
      success: true,
      item,
      order: updatedOrder,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getChecklistItems = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({
      _id: orderId,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const items = await Checklist.find({
      order: orderId,
    }).sort({
      createdAt: 1,
    });

    return res.status(200).json({
      success: true,
      totalItems: order.totalItems,
      completedItems: order.completedItems,
      progress: order.progress,
      items,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleChecklistItem = async (req, res) => {
  try {
    const item = await Checklist.findById(req.params.itemId);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Checklist item not found",
      });
    }

    const order = await Order.findOne({
      _id: item.order,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Prevent changes after completion
    if (order.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Completed orders cannot be modified.",
      });
    }

    item.completed = !item.completed;

    await item.save();

    const updatedOrder = await recalculateOrder(item.order);

    return res.status(200).json({
      success: true,
      message: item.completed
        ? "Item marked completed"
        : "Item marked pending",
      item,
      order: updatedOrder,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteChecklistItem = async (req, res) => {
  try {
    const item = await Checklist.findById(req.params.itemId);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    const order = await Order.findOne({
      _id: item.order,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (order.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Completed orders cannot be modified.",
      });
    }

    await item.deleteOne();

    const updatedOrder = await recalculateOrder(item.order);

    return res.status(200).json({
      success: true,
      message: "Item deleted",
      order: updatedOrder,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateChecklistItem = async (req, res) => {
  try {
    const item = await Checklist.findById(req.params.itemId);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    const order = await Order.findOne({
      _id: item.order,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (order.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Completed orders cannot be modified.",
      });
    }

    const updatedItem = await Checklist.findByIdAndUpdate(
      req.params.itemId,
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Item updated successfully",
      item: updatedItem,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};