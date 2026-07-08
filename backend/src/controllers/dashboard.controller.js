import Order from "../models/order.model.js";

export const getDashboardStats = async (
    req,
    res
) => {
    try {

        const ownerId = req.user._id;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const [
            totalOrders,
            pendingOrders,
            inProgressOrders,
            completedOrders,
            todayOrders,
            completedToday,
            packed,
        ] = await Promise.all([

            Order.countDocuments({
                owner: ownerId,
            }),

            Order.countDocuments({
                owner: ownerId,
                status: "pending",
            }),

            Order.countDocuments({
                owner: ownerId,
                status: "in-progress",
            }),

            Order.countDocuments({
                owner: ownerId,
                status: "completed",
            }),

            Order.countDocuments({
                owner: ownerId,
                createdAt: {
                    $gte: today,
                },
            }),

            Order.countDocuments({
                owner: ownerId,
                status: "completed",
                completedAt: {
                    $gte: today,
                },
            }),

            Order.aggregate([
                {
                    $match: {
                        owner: ownerId,
                    },
                },
                {
                    $group: {
                        _id: null,
                        total: {
                            $sum: "$completedItems",
                        },
                    },
                },
            ]),

        ]);

        const todayProgress =
            todayOrders === 0
                ? 0
                : Math.round(
                    (completedToday / todayOrders) * 100
                );

        console.log({
            totalOrders,
            pendingOrders,
            inProgressOrders,
            completedOrders,
            todayOrders,
            completedToday,
            todayProgress,
            itemsPacked: packed[0]?.total ?? 0,
        });

        return res.status(200).json({
            success: true,
            stats: {
                totalOrders,
                pendingOrders,
                inProgressOrders,
                completedOrders,
                todayOrders,
                completedToday,
                todayProgress,
                itemsPacked: packed[0]?.total ?? 0,
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
            .select(
                "customerName status progress totalItems completedItems createdAt"
            )
            .sort({
                createdAt: -1,
            })
            .limit(10)
            .lean();

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

export const getWeeklyPerformance = async (req, res) => {

    try {

        const ownerId = req.user._id;

        const today = new Date();
        today.setHours(23, 59, 59, 999);

        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 6);
        sevenDaysAgo.setHours(0, 0, 0, 0);

        const data = await Order.aggregate([

            {
                $match: {
                    owner: ownerId,
                    completedAt: {
                        $gte: sevenDaysAgo,
                        $lte: today,
                    },
                    status: "completed",
                },
            },

            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$completedAt",
                        },
                    },
                    completed: {
                        $sum: 1,
                    },
                },
            },

            {
                $sort: {
                    _id: 1,
                },
            },

        ]);

        return res.status(200).json({

            success: true,

            performance: data,

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};