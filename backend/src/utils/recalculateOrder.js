import Checklist from "../models/checklist.model.js";
import Order from "../models/order.model.js";

const recalculateOrder = async (orderId) => {

    const checklistItems = await Checklist.find({
        order: orderId,
    });

    const totalItems = checklistItems.length;

    const completedItems = checklistItems.filter(
        item => item.completed
    ).length;

    const progress = totalItems === 0 ? 0 : Math.round(
        (completedItems / totalItems) * 100
    );

    const status =
        progress > 0
            ? "in-progress"
            : "pending";

    const updatedOrder =
        await Order.findByIdAndUpdate(
            orderId,
            {
                totalItems,
                completedItems,
                progress,
                status,
            },
            {
                returnDocument: "after",
            }
        );

    return updatedOrder;
};

export default recalculateOrder;