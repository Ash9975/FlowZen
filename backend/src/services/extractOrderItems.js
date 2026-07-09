import ai from "../config/gemini.js";
import downloadImage from "./downloadImage.js";

const extractOrderItems = async (
  imageUrl
) => {

  const imageBuffer = await downloadImage(imageUrl);

  const base64Image = imageBuffer.toString("base64");

  const timeoutPromise =
    new Promise((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              "AI request timeout"
            )
          ),
        60000
      )
    );

  const response = await Promise.race([
    ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: [
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64Image,
          },
        },
        {
          text: `
You are an order extraction system.

Analyze the uploaded image and extract every order item.

Return ONLY a valid JSON array.

Format:

[
  {
    "itemName": "Tomato",
    "quantity": 2,
    "unit": "kg"
  }
]

Rules:

1. Return ONLY JSON. No markdown, no explanations, no \`\`\`json blocks.
2. Preserve item names exactly as written in the image.
3. quantity must be a number whenever available.
4. unit must contain the measurement unit (kg, gm, dozen, panni, nos, rs, etc.).
5. If only a price is mentioned (example: Mitha nim 40rs), use:
   {
     "itemName": "Mitha nim",
     "quantity": null,
     "unit": "40rs"
   }
6. If quantity is missing, set quantity to null.
7. Extract every visible item from the image.
8. Do not translate local vegetable names.
9. Do not combine multiple items into one.
10. Return an empty array [] if no items are found.
11. IMP: Never invent products.

Example Output:

[
  {
    "itemName": "Hari mirch",
    "quantity": 5,
    "unit": "kg"
  },
  {
    "itemName": "Mitha nim",
    "quantity": null,
    "unit": "40rs"
  }
]
`
        },
      ],
    }),
    timeoutPromise,
  ]);

  if (!response?.text) {

    throw new Error(
      "No response received from Gemini."
    );

  }

  console.log(response.text);

  const cleanedResponse = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  console.log(cleanedResponse);

  let parsed;

  try {

    parsed = JSON.parse(cleanedResponse);

  } catch (error) {

    throw new Error(
      "Gemini returned invalid JSON."
    );

  }

  return JSON.stringify(parsed);

};

export default extractOrderItems;