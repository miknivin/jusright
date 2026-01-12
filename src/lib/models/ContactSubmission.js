// models/ContactSubmission.js

import mongoose from "mongoose";

const InterestEnum = [
  "Custom ERP System",
  "E-Commerce Solution",
  "AI-Powered Automation",
  "Custom Website",
  "Business Startup Package",
  "General Inquiry / Consultation",
];

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters"],
      default: null,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      default: null,
      match: [/^\+?[0-9\s\-()]{10,20}$/, "Please enter a valid phone number"], // Optional validation
    },
    interests: {
      type: [String],
      enum: {
        values: InterestEnum,
        message: "Invalid interest selected",
      },
      default: [],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [20, "Message should be at least 20 characters"],
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    agreedToPrivacy: {
      type: Boolean,
      required: [true, "You must agree to Privacy Policy and Terms"],
      default: false,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "in-discussion", "converted", "closed"],
      default: "new",
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
    collection: "contact_submissions",
  }
);

// Prevent model overwrite in development (Next.js hot reload)
const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", contactSubmissionSchema);

export default ContactSubmission;
