import Activity from "../models/activity.model.js";

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({
      user: req.user._id,
    })
      .populate("order", "customerName")
      .sort({ createdAt: -1 });

    const formatted = activities.map((activity) => ({
      _id: activity._id,
      type: activity.type,
      title: activity.title,
      description: activity.description,
      orderId: activity.order?._id,
      customerName: activity.order?.customerName,
      time: formatTime(activity.createdAt),
      createdAt: activity.createdAt,
    }));

    res.status(200).json({
      success: true,
      activities: formatted,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

function formatTime(date) {
  const diff =
    Math.floor((Date.now() - new Date(date)) / 1000);

  if (diff < 60)
    return "Just now";

  if (diff < 3600)
    return `${Math.floor(diff / 60)} min ago`;

  if (diff < 86400)
    return `${Math.floor(diff / 3600)} hr ago`;

  if (diff < 172800)
    return "Yesterday";

  return new Date(date).toLocaleDateString();
}