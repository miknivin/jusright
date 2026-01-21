"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

const ContactModal = ({ isOpen, onClose, pointOfSource }) => {
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
      'input[type="checkbox"]:checked',
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
      pointOfSource: "Modal",
      pointOfSource: pointOfSource || "Modal",
    };

    try {
      const res = await axios.post("/api/contact", data);
      if (res.data.success) {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 1500);
        toast.success("Thank you! We'll get back to you soon.", {
          duration: 4000,
          position: "bottom-left",
        });
      } else {
        toast.error(res.data.error || "Something went wrong.");
        setError(res.data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error("Contact modal error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed font-suse top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 9999 }}
      onClick={onClose} // Close on overlay click
    >
      <div
        className="modal-content bg-white rounded-3 shadow-lg overflow-hidden"
        style={{
          maxWidth: "900px",
          width: "90%",
          maxHeight: "90vh",
          borderRadius: "10px",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
      >
        <div className="modal-header border-0 pb-0 px-4 pt-4">
          <h4 className="modal-title fw-bold text-black font-suse">
            Get Your Free Needs Audit
          </h4>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          />
        </div>

        <div
          style={{ maxHeight: "700px", overflowY: "auto", borderRadius: "0px" }}
          className="modal-body p-3 contact-form-wrap style-2 px-4 pb-4"
        >
          <form className="pt-0" onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-inner">
                  <label className="fw-semibold">
                    Your name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your full name"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-inner">
                  <label className="fw-semibold">Business / Company</label>
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-inner">
                  <label className="fw-semibold">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@justrighttech.co"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-inner">
                  <label className="fw-semibold">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="+91 _________"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-inner2">
                  <label className="fw-semibold">How can we assist you?</label>
                  <ul className="list-unstyled">
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
                  <label className="fw-semibold">
                    Tell Us About Your Project{" "}
                  </label>
                  <textarea
                    name="message"
                    style={{ minHeight: "auto" }}
                    className="form-control"
                    rows={2}
                    placeholder="Describe your business, challenges, and goals..."
                  />
                </div>
              </div>
            </div>

            <div className="form-inner2 two py-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="privacyCheck"
                  id="privacyCheck"
                  required
                />
                <label className="form-check-label  " htmlFor="privacyCheck">
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

            <div className="pt-2">
              <button
                type="submit"
                className="primary-btn3 btn-hover px-5 mt-0"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Inquiry"}
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
                <span style={{ top: 50 }} />
              </button>
            </div>

            {success && (
              <div className="alert alert-success text-center mt-4">
                Thank you! Your message has been sent successfully. We'll be in
                touch soon.
              </div>
            )}

            {error && (
              <div className="alert alert-danger text-center mt-4">{error}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
