// In your server-side code (e.g., an API route in Next.js)

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create 3 line blog post with html tags based on this title: ${title}`,
        },
        {
          role: "system",
          content: `${role || "I am a helpful assistant"}. Write with html tags.`,
        },
      ],
    });

    return new Response(JSON.stringify({
      content: chatCompletion.choices[0].message?.content,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error("request error", error);
    return new Response(JSON.stringify({ error: "error updating post" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
