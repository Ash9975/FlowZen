import Order from "../models/order.model.js";

export const getDashboardStats = async (
    req,
    res
) => {
    try {

        const ownerId = req.user._id;

        const totalOrders =
            await Order.countDocuments({
                owner: ownerId,
            });

        const pendingOrders =
            await Order.countDocuments({
                owner: ownerId,
                status: "pending",
            });

        const inProgressOrders =
            await Order.countDocuments({
                owner: ownerId,
                status: "in-progress",
            });

        const completedOrders =
            await Order.countDocuments({
                owner: ownerId,
                status: "completed",
            });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const todayOrders =
            await Order.countDocuments({
                owner: ownerId,
                createdAt: {
                    $gte: today,
                },
            });

        return res.status(200).json({
            success: true,
            stats: {
                totalOrders,
                pendingOrders,
                inProgressOrders,
                completedOrders,
                todayOrders,
            },
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const getRecentOrders = async (
    req,
    res
) => {
    try {

        const orders = await Order.find({
            owner: req.user._id,
        })
            .select("customerName status progress totalItems completedItems createdAt"   )
            .sort({
                createdAt: -1,
            })
            .limit(10);

        return res.status(200).json({
            success: true,
            orders,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};