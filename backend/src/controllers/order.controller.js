import Order from "../models/order.model.js";
import Checklist from "../models/checklist.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import { logActivity } from "../services/activity.service.js";

export const createOrder = async (req, res) => {
  try {

    const { customerName } = req.body;

    if (!customerName) {
      return res.status(400).json({
        success: false,
        message: "Customer name required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Order list file required",
      });
    }

    const uploadedFile =
      await uploadToCloudinary(
        req.file.buffer
      );

    const order =
      await Order.create({
        customerName,
        uploadedFileUrl:
          uploadedFile.secure_url,

        fileType: req.file.mimetype,
        owner: req.user._id,
      });

    await logActivity({
      user: req.user._id,
      order: order._id,
      type: "created",
      title: "Order Created",
      description: `${order.customerName}'s order was created.`,
    });

    return res.status(201).json({
      success: true,
      order,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const search = req.query.search || "";
    const status = req.query.status || "all";

    const query = {
      owner: req.user._id,

      customerName: {
        $regex: search,
        $options: "i",
      },
    };

    if (status !== "all") {
      query.status = status;
    }

    const totalOrders =

      await Order.countDocuments(query);
    const orders = await Order.find(query)
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(
        totalOrders / limit
      ),
      totalOrders,
      count: orders.length,
      orders,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Fetch checklist items
    const checklist = await Checklist.find({
      order: order._id,
    }).sort({
      createdAt: 1,
    });

    return res.status(200).json({
      success: true,
      order: {
        ...order.toObject(),
        checklist,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user._id,
      },
      req.body,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await logActivity({
      user: req.user._id,
      order: order._id,
      type: "updated",
      title: "Order Updated",
      description: `${order.customerName}'s order was updated.`,
    });

    return res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await logActivity({
      user: req.user._id,
      order: order._id,
      type: "deleted",
      title: "Order Deleted",
      description: `${order.customerName}'s order was deleted.`,
    });
    const order = await Order.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const completeOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (order.completedItems !== order.totalItems) {
      return res.status(400).json({
        success: false,
        message: "Complete all checklist items first.",
      });
    }

    order.status = "completed";
    order.completedAt = new Date();

    await order.save();
    await logActivity({
      user: req.user._id,
      order: order._id,
      type: "completed",
      title: "Order Completed",
      description: `${order.customerName}'s order was packed successfully.`,
    });

    return res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};