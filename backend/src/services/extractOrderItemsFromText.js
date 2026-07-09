import ai from "../config/gemini.js";

const MODELS = [
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
];

const extractOrderItemsFromText = async (
    orderText
) => {

    const prompt = `
You are an order extraction system.

Analyze the following order message and extract every order item.

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

1. Return ONLY JSON.
2. No markdown.
3. No explanation.
4. Preserve item names exactly.
5. quantity must be a number whenever available.
6. unit must contain kg, gm, bunch, dozen, packet, nos, rs, litre, etc.
7. If only price is present:
{
  "itemName":"Mitha Nim",
  "quantity":null,
  "unit":"40rs"
}
8. If quantity is missing, use null.
9. Never invent products.
10. Return [] if nothing is found.

Order:

${orderText}
`;

    let lastError;

    for (const model of MODELS) {

        try {

            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(
                    () =>
                        reject(
                            new Error("AI request timeout")
                        ),
                    60000
                )
            );

            const response = await Promise.race([

                ai.models.generateContent({

                    model,

                    contents: prompt,

                }),

                timeoutPromise,

            ]);

            if (!response?.text) {

                throw new Error(
                    "No response received from Gemini."
                );

            }

            const cleanedResponse = response.text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            const parsed =
                JSON.parse(cleanedResponse);

            return JSON.stringify(parsed);

        } catch (error) {

            lastError = error;

            console.warn(
                `❌ ${model} failed:`,
                error.message
            );

            // Try next model only if Gemini is overloaded

            if (error.status === 503) {

                continue;

            }

            // Any other error should stop immediately

            throw error;

        }

    }

    throw new Error(
        "AI service is currently busy. Please try again in a few moments."
    );

};

export default extractOrderItemsFromText;