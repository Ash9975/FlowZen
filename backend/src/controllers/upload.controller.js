import cloudinary from "../config/cloudinary.js";

export const uploadFile = async (req, res) => {
    console.log(req.file);
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    return res.status(200).json({
      success: true,
      fileName: req.file.originalname,
      message: "File received",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};