import Order from "../models/order.model.js";
import Checklist from "../models/checklist.model.js";
import extractOrderItems from "../services/extractOrderItems.js";
import extractOrderItemsFromText from "../services/extractOrderItemsFromText.js";
export const processOrder = async (
    req,
    res
) => {
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
                message: "Checklist already generated",
            });
        }

        let aiResponse;

        if (order.orderText) {

            aiResponse =
                await extractOrderItemsFromText(
                    order.orderText
                );

        } else {

            aiResponse =
                await extractOrderItems(
                    order.uploadedFileUrl
                );

        }
        let items;

        try {
            items = JSON.parse(aiResponse);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "AI returned an invalid response.",
            });
        }



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

        console.error("Process Order Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};