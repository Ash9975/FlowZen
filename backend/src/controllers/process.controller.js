import Order from "../models/order.model.js";
import Checklist from "../models/checklist.model.js";
import extractOrderItems from "../services/extractOrderItems.js";

export const processOrder = async (
    req,
    res
) => {
    console.log("PROCESS ORDER HIT");
    try {

        const order =
            await Order.findOne({
                _id: req.params.id,
                owner: req.user._id,
            });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        const existingChecklist =
            await Checklist.find({
                order: order._id,
            });

        if (existingChecklist.length > 0) {
            return res.status(400).json({
                success: false,
                message:"Checklist already generated",
            });
        }

        const aiResponse =
            await extractOrderItems(
                order.uploadedFileUrl
            )

        const items = JSON.parse(aiResponse);



        const checklistItems =
            await Checklist.insertMany(
                items.map((item) => ({
                    order: order._id,
                    itemName: item.itemName,
                    quantity: item.quantity,
                    unit: item.unit,
                }))
            );

        await Order.findByIdAndUpdate(
            order._id,
            {
                processed: true,
                totalItems: checklistItems.length,
                status: "in-progress",
            }
        );

        return res.status(200).json({
            success: true,
            count:
                checklistItems.length,
            checklistItems,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "AI service temporarily unavailable. Please try again."
        });
    }
};