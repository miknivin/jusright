import React from "react";
import ContactMainPage from "@/components/contact-section";

export const metadata = {
  title: "Contact JustRight Tech | Let's Build What Fits Your Business",
  description:
    "Ready for custom software, workflows, websites, or automations that truly fit? Tell us your needs — we’ll reply quickly with honest ideas. No obligation, just real conversation.",
  keywords:
    "contact custom software, get free needs audit, JustRight Tech contact, tailored software Kerala, custom ERP inquiry, e-commerce consultation",
  openGraph: {
    title: "Contact JustRight Tech — Tailored Solutions Built Just Right",
    description:
      "Share your business challenges. We’ll respond with honest ideas on custom software, workflows, websites, and more — no pressure, just helpful conversation.",
    url: "https://justrighttech.co/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JustRight Tech | Free Needs Audit",
    description:
      "Tell us about your project — we’ll get back with tailored ideas. Honest, no-obligation conversation.",
  },
  alternates: {
    canonical: "https://justrighttech.co/contact",
  },
};
const ContactPage = () => {
  return (
    <>
      <ContactMainPage />
    </>
  );
};

export default ContactPage;
