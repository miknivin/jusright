"use client";

import React, { useState } from "react";
import Header5 from "@/components/header/Header5";
import Home5Footer from "@/components/Footer/Home5Footer";
import axios from "axios";
import Link from "next/link";

const ContactMainPage = ({ openModal }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = new FormData(e.target);
    const interests = [];
    const checkboxes = e.target.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach((checkbox) => {
      if (checkbox.name === "interests") interests.push(checkbox.value);
    });

    const data = {
      name: formData.get("name")?.trim(),
      company: formData.get("company")?.trim() || null,
      email: formData.get("email")?.toLowerCase().trim(),
      phone: formData.get("phone")?.trim() || null,
      interests,
      message: formData.get("message")?.trim(),
      agreedToPrivacy: formData.get("privacyCheck") === "on",
    };

    try {
      const res = await axios.post("/api/contact", data);

      if (res.data.success) {
        setSuccess(true);
        e.target.reset();
      } else {
        setError(res.data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError(err?.error || "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header5 openModal={openModal} />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>
                  Let’s Build
                  <br />
                  Something Great Together
                </h1>
                <ul className="breadcrumb-list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <svg
                      width={25}
                      height={6}
                      viewBox="0 0 25 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM20 3.5L25 5.88675V0.113249L20 2.5V3.5ZM4.5 3.5H20.5V2.5H4.5V3.5Z" />
                    </svg>
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-area mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="contact-form-wrap style-2">
                <div className="section-title three text-center">
                  <h2>Start Your Project Today</h2>
                  <p>
                    Tell us about your business and challenges. We'll get back
                    to you quickly with ideas on how we can help — no
                    obligation, just honest conversation.
                  </p>
                </div>
                <svg
                  className="divider"
                  height={6}
                  viewBox="0 0 696 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM691 3.5L696 5.88675V0.113249L691 2.5V3.5ZM4.5 3.5H691.5V2.5H4.5V3.5Z" />
                </svg>

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Business / Company</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Phone (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 _________"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-inner2">
                        <label>How can we assist you?</label>
                        <ul>
                          {[
                            "Custom ERP System",
                            "E-Commerce Solution",
                            "AI-Powered Automation",
                            "Custom Website",
                            "Business Startup Package",
                            "General Inquiry / Consultation",
                          ].map((interest, index) => (
                            <li key={index}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="interests"
                                  value={interest}
                                  id={`interest${index + 1}`}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`interest${index + 1}`}
                                >
                                  {interest}
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Tell Us About Your Project *</label>
                        <textarea
                          name="message"
                          placeholder="Describe your business, challenges, and goals..."
                          rows={6}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-inner2 two">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="privacyCheck"
                        id="privacyCheck"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="privacyCheck"
                      >
                        By submitting, you agree to our{" "}
                        <Link href="/privacy-policy" target="_blank">
                          <span>Privacy Policy</span>
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" target="_blank">
                          <span>Terms of Service</span>
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="primary-btn3 mb-3 btn-hover"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span />
                  </button>
                  {success && (
                    <div className="alert alert-success text-center mb-4">
                      Thank you! Your message has been sent successfully. We'll
                      be in touch soon.
                    </div>
                  )}

                  {error && (
                    <div className="alert alert-danger text-center mb-4">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home5Footer openModal={openModal} />
    </>
  );
};

export default ContactMainPage;
