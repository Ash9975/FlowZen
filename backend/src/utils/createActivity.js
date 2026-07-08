import Activity from "../models/activity.model.js";

const createActivity = async (
    owner,
    order,
    type,
    customerName
) => {

    return await Activity.create({
        owner,
        order,
        type,
        customerName,
    });

};

export default createActivity;