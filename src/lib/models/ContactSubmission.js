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

const SourceEnum = [
  "Banner", // From a specific page
  "ContactPage", // Main contact page
  "Modal", // Quick contact modal (e.g., header CTA)
  "Footer", // Footer link/email
  "FeatureSection",
  "AboutSection",
  "VisionSection",
  "ServicesPage", // From a specific service detail page
  "HomePage", // From homepage CTA/banner
  "Other", // Catch-all for future or unknown sources
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
      match: [/^\+?[0-9\s\-()]{10,20}$/, "Please enter a valid phone number"],
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
      required: false,
      trim: true,
    },
    agreedToPrivacy: {
      type: Boolean,
      required: [true, "You must agree to Privacy Policy and Terms"],
      default: false,
    },
    messageHistory: [
      {
        message: {
          type: String,
          required: true,
          trim: true,
        },
        submittedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    pointOfSource: {
      type: String,
      enum: {
        values: SourceEnum,
        message: "{VALUE} is not a valid source",
      },
      default: "ContactPage", // Default to main contact page
      required: true,
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
    timestamps: true,
    collection: "contact_submissions",
  }
);

contactSubmissionSchema.index(
  { email: 1, pointOfSource: 1 },
  { unique: true, background: true }
);
// Prevent model overwrite during hot reload in development
const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", contactSubmissionSchema);

export default ContactSubmission;
