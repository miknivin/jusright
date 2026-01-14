// app/api/contact/route.js
import dbConnect from "@/lib/connection";
import ContactSubmission from "@/lib/models/ContactSubmission";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      interests = [],
      message,
      pointOfSource,
      agreedToPrivacy,
    } = body;

    // Validation
    if (!name || !email || !agreedToPrivacy) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields or privacy agreement",
        },
        { status: 400 }
      );
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Upsert filter
    const filter = {
      email: email.toLowerCase().trim(),
      pointOfSource: pointOfSource || "ContactPage",
    };

    // Update/insert data
    const update = {
      $set: {
        name: name.trim(),
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        interests,
        message: message.trim(), // latest message (for quick view)
        agreedToPrivacy,
        pointOfSource: pointOfSource || "ContactPage",
        status: "new", // reset status on new interaction
      },
      // ← Push new message to history array (this is the key addition)
      $push: {
        messageHistory: {
          message: message.trim(),
          submittedAt: new Date(),
        },
      },
      // Only set on first insert
      $setOnInsert: {
        createdAt: new Date(),
      },
    };

    const options = {
      upsert: true,
      new: true, // return updated doc
      setDefaultsOnInsert: true,
    };

    const submission = await ContactSubmission.findOneAndUpdate(
      filter,
      update,
      options
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received. We'll get back to you soon.",
        submissionId: submission._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
