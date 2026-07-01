import Activity from "../models/activity.model.js";

export const logActivity = async ({
    user,
    order,
    type,
    title,
    description,
}) => {
    try {
        await Activity.create({
            user,
            order,
            type,
            title,
            description,
        });
    } catch (error) {
        console.log(error);
    }
};