import axios from "axios";

const downloadImage = async (imageUrl) => {
  const response = await axios.get(
    imageUrl,
    {
      responseType: "arraybuffer",
    }
  );

  return Buffer.from(response.data);
};

export default downloadImage;