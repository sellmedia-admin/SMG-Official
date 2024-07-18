import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.json();
    if (!body || !body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const formData = new URLSearchParams();
    formData.append("Email", body.email);

    console.log(formData);

    try {
      const response = await fetch(
        "https://forms.zohopublic.com/sellmediaafrica/form/EmailSubscription/formperma/vD11snTZC0_8ZIohlLMjww2TS7e9WUItmcH6hOu0y1w/htmlRecords/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);

      return NextResponse.json(result);
    } catch (error) {
      return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
