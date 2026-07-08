import Activity from "../models/activity.model.js";

export const getActivities = async (req, res) => {

    try {

        const activities = await Activity.find({

            owner: req.user._id,

        })

            .sort({
                createdAt: -1,
            })

            .limit(50)
            .lean();

        return res.status(200).json({

            success: true,

            activities,

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};