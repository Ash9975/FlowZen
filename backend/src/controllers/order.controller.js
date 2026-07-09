import Order from "../models/order.model.js";
import Checklist from "../models/checklist.model.js";
import Activity from "../models/activity.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import createActivity from "../utils/createActivity.js";

export const createOrder = async (req, res) => {
  try {

    const {
      customerName,
      source,
      orderText,
    } = req.body;

    if (!customerName) {
      return res.status(400).json({
        success: false,
        message: "Customer name required",
      });
    }

    if (
      source === "text" &&
      !orderText?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Order text required",
      });
    }

    if (
      source !== "text" &&
      !req.file
    ) {
      return res.status(400).json({
        success: false,
        message: "Order image required",
      });
    }


    let uploadedFileUrl = null;
    let fileType = "text";

    if (source !== "text") {

      const uploadedFile =
        await uploadToCloudinary(
          req.file.buffer
        );

      uploadedFileUrl =
        uploadedFile.secure_url;

      fileType =
        req.file.mimetype;

    }

    const order = await Order.create({

      customerName,

      uploadedFileUrl,

      fileType,

      orderText:
        source === "text"
          ? orderText
          : null,

      owner: req.user._id,

    });

    await createActivity(

      req.user._id,

      order._id,

      "order-created",

      order.customerName

    );

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

    await Checklist.deleteMany({
      order: order._id,
    });

    await Activity.deleteMany({
      order: order._id,
    });

    await createActivity(

      req.user._id,

      order._id,

      "order-deleted",

      order.customerName

    );

    await order.deleteOne();

    return res.json({

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
    await createActivity(

      req.user._id,

      order._id,

      "order-completed",

      order.customerName

    );

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