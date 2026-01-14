"use client";

import React from "react";
import Header5 from "@/components/header/Header5";
import Home5Footer from "@/components/Footer/Home5Footer";
import Link from "next/link";

const PrivacyPolicyPage = ({ openModal }) => {
  return (
    <>
      <Header5 openModal={openModal} />

      {/* Breadcrumb Section */}
      <div className="breadcrumb-section mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="banner-content">
                <h1>Privacy Policy</h1>
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
                    Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="service-details-page mb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="details-content-wrap legal">
                <h2>Privacy Policy</h2>
                <p className="mb-30">
                  <strong>Last updated: January 04, 2026</strong>
                </p>

                <p>
                  This Privacy Policy describes how we collect, use, and handle
                  your personal information when you visit our website, submit
                  inquiries, or engage our services for custom software
                  development (including Custom ERP Systems, E-Commerce
                  Solutions, AI-Powered Automations, Custom Websites, and
                  Business Startup Packages).
                </p>

                <h4>1. Information We Collect</h4>
                <p>
                  We collect information you provide directly to us, including:
                </p>
                <ul className="listing two mb-30">
                  <li>
                    Your name, email address, phone number, and company details
                    when you fill out contact forms or request a free needs
                    audit.
                  </li>
                  <li>
                    Details about your business, project requirements, goals,
                    and challenges shared during consultations or
                    communications.
                  </li>
                  <li>
                    Any files or documents you upload (e.g., project briefs,
                    existing system details).
                  </li>
                  <li>
                    Technical data such as IP address, browser type, and device
                    information automatically collected when you visit our site.
                  </li>
                </ul>

                <h4>2. How We Use Your Information</h4>
                <p>We use the information we collect to:</p>
                <ul className="listing two mb-30">
                  <li>
                    Respond to your inquiries and provide information about our
                    services.
                  </li>
                  <li>
                    Conduct a free needs audit and prepare tailored project
                    proposals.
                  </li>
                  <li>
                    Communicate with you about your project, including updates,
                    milestones, and support.
                  </li>
                  <li>
                    Improve our website and services based on user behavior and
                    feedback.
                  </li>
                  <li>Comply with legal obligations.</li>
                </ul>

                <h4>3. Information Sharing</h4>
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in the
                  following cases:
                </p>
                <ul className="listing two mb-30">
                  <li>
                    With trusted service providers (e.g., cloud hosting, email
                    services) who assist us in operating our website and
                    business, under strict confidentiality agreements.
                  </li>
                  <li>
                    When required by law or to protect our rights, safety, or
                    property.
                  </li>
                  <li>
                    In the event of a business transfer (merger, acquisition),
                    your information may be transferred as part of the business
                    assets.
                  </li>
                </ul>

                <h4>4. Data Security</h4>
                <p>
                  We implement reasonable technical and organizational measures
                  to protect your personal information from unauthorized access,
                  loss, or misuse. However, no method of transmission over the
                  internet or electronic storage is 100% secure, so we cannot
                  guarantee absolute security.
                </p>

                <h4>5. Your Rights</h4>
                <p>You have the right to:</p>
                <ul className="listing two mb-30">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>
                    Request deletion of your information (subject to legal
                    obligations).
                  </li>
                  <li>Withdraw consent for processing (where applicable).</li>
                </ul>
                <p>To exercise these rights, contact us at the email below.</p>

                <h4>3. Cookies & Tracking Technologies</h4>
                <p>
                  We use the following third-party analytics tools to understand
                  website usage and improve our services. These tools may
                  collect anonymous data like IP addresses, browser type, device
                  information, and behavior (e.g., page views, button clicks) to
                  help us analyze campaigns and site performance:
                </p>
                <ul className="listing two mb-30">
                  <li>
                    <strong>Google Analytics</strong>: Tracks website traffic
                    and user interactions. Data is anonymized where possible.
                    See Google's{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Microsoft Clarity</strong>: Provides session
                    recordings and heatmaps for user behavior insights. See
                    Microsoft's{" "}
                    <a
                      href="https://privacy.microsoft.com/en-us/privacystatement"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Statement
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Vercel Analytics</strong>: Monitors site performance
                    and traffic (cookie-free). See Vercel's{" "}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  We do not use these for targeted advertising. You can opt out
                  via browser settings or tools like Google Analytics Opt-out.
                  Essential cookies for site functionality are always active; no
                  non-essential tracking without disclosure.
                </p>

                <h4>7. Children's Privacy</h4>
                <p>
                  Our services are not directed to individuals under 18. We do
                  not knowingly collect personal information from children.
                </p>

                <h4>8. Changes to This Policy</h4>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated "Last updated"
                  date.
                </p>

                <h4>9. Contact Us</h4>
                <p>
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us at:
                  <br />
                  <strong>Email:</strong> hello@justrighttech.co
                  <br />
                  <strong>Phone:</strong> +91 __________
                </p>

                <p className="mt-50">
                  By using our website or submitting information through our
                  contact forms, you acknowledge that you have read and
                  understood this Privacy Policy.
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

export default PrivacyPolicyPage;
