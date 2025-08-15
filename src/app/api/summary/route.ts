import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    // Instruct the model to return summary + key points
    const prompt = `
Summarize the following travel post and also provide key points as a list.
Return the result in JSON format like this:
{ "summary": "...", "keyPoints": ["point1", "point2", ...] }

Post content:
${text}
`;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    const result = await response.json();

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    // Try to parse JSON returned by the model
    let parsedResult;
    try {
      parsedResult = JSON.parse(result[0].summary_text);
    } catch {
      // fallback if model didn't return perfect JSON
      parsedResult = { summary: result[0].summary_text, keyPoints: [] };
    }

    return NextResponse.json(parsedResult);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate summary and key points" },
      { status: 500 }
    );
  }
}
