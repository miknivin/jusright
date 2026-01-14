"use client";

import React from "react";
import Header5 from "@/components/header/Header5";
import Home5Footer from "@/components/Footer/Home5Footer";
import Link from "next/link";

const TermsOfServicePage = ({ openModal }) => {
  return (
    <>
      <Header5 openModal={openModal} />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>Terms of Service</h1>
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
                    Terms of Service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of Service Content */}
      <div className="service-details-page mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="details-content-wrap legal">
                <h2>Terms of Service</h2>
                <p className="mb-30">
                  <strong>Last updated: January 04, 2026</strong>
                </p>

                <p>
                  These Terms of Service ("Terms") govern your access to and use
                  of our website and services, including custom ERP systems,
                  e-commerce solutions, AI-powered automations, custom websites,
                  and business startup packages ("Services").
                </p>
                <p>
                  By accessing our website, submitting inquiries, or engaging
                  our Services, you agree to be bound by these Terms. If you do
                  not agree, please do not use our website or Services.
                </p>

                <h4>1. Use of Our Website</h4>
                <ul className="listing two mb-30">
                  <li>You may use our website for lawful purposes only.</li>
                  <li>
                    You agree not to interfere with or disrupt the website or
                    servers.
                  </li>
                  <li>
                    All content on the website (text, images, code) is owned by
                    us or licensed to us and protected by copyright.
                  </li>
                </ul>

                <h4>2. Inquiries & Free Needs Audit</h4>
                <p>
                  Submitting a contact form or requesting a free needs audit
                  does not create a binding contract. It is an opportunity for
                  us to discuss your requirements and provide a proposal.
                </p>
                <p className="mb-30">
                  Proposals are non-binding estimates. Actual scope, timeline,
                  and costs will be confirmed in a formal agreement.
                </p>

                <h4>3. Services & Projects</h4>
                <p>When you engage our Services:</p>
                <ul className="listing two mb-30">
                  <li>
                    We will provide Services as described in the agreed proposal
                    or statement of work.
                  </li>
                  <li>
                    You agree to provide timely feedback, access, and
                    information needed for completion.
                  </li>
                  <li>
                    Changes to scope may require additional fees and timeline
                    adjustments.
                  </li>
                  <li>
                    We aim for efficient, high-quality delivery but do not
                    guarantee specific business outcomes (e.g., sales
                    increases).
                  </li>
                </ul>

                <h4>4. Payment Terms</h4>
                <p>
                  Payments are due as outlined in the project agreement
                  (typically milestone-based). Late payments may incur interest
                  or pause work.
                </p>
                <p className="mb-30">
                  All fees are non-refundable except where explicitly stated.
                </p>

                <h4>5. Intellectual Property</h4>
                <p>
                  Upon full payment, we transfer ownership of the final
                  deliverables to you (source code, designs, etc.), excluding
                  third-party tools/libraries.
                </p>
                <p className="mb-30">
                  We retain the right to showcase the project in our portfolio
                  (anonymized if requested).
                </p>

                <h4>6. Confidentiality</h4>
                <p>
                  We will keep your business information confidential. You agree
                  not to disclose our proprietary methods or pricing.
                </p>

                <h4>7. Warranties & Limitations</h4>
                <p>
                  Services are provided "as is" with reasonable skill and care.
                  We do not warrant uninterrupted or error-free operation.
                </p>
                <p>
                  Our liability is limited to the amount paid for the Services.
                  We are not liable for indirect losses (e.g., lost profits).
                </p>

                <h4>8. Termination</h4>
                <p>
                  Either party may terminate with notice if the other breaches
                  material terms. Upon termination, you pay for work completed.
                </p>

                <h4>9. Governing Law</h4>
                <p>
                  These Terms are governed by the laws of India. Disputes will
                  be resolved in courts of [Your City], India.
                </p>

                <h4>10. Changes to Terms</h4>
                <p>
                  We may update these Terms. Continued use after changes
                  constitutes acceptance.
                </p>

                <h4>11. Contact</h4>
                <p>
                  Questions about these Terms? Contact us at:
                  <br />
                  <strong>Email:</strong> hello@justrighttech.co
                  <br />
                  <strong>Phone:</strong> +91 __________
                </p>

                <p className="mt-50">
                  Thank you for trusting us with your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home5Footer openModal={openModal} />
    </>
  );
};

export default TermsOfServicePage;
