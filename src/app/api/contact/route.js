// app/api/contact/route.js

import dbConnect from "@/lib/connection";
import ContactSubmission from "@/lib/models/ContactSubmission";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Parse form data
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      interests = [],
      message,
      agreedToPrivacy,
    } = body;

    // Basic server-side validation
    if (!name || !email || !message || !agreedToPrivacy) {
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

    if (message.length < 7) {
      return NextResponse.json(
        { success: false, error: "Message too short" },
        { status: 400 }
      );
    }

    // Create new submission
    const submission = new ContactSubmission({
      name: name.trim(),
      company: company?.trim() || null,
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || null,
      interests,
      message: message.trim(),
      agreedToPrivacy,
    });

    await submission.save();

    // Success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received. We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Don't expose internal errors
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Optional: Handle non-POST requests
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
