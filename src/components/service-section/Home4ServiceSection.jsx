"use client";

import { services } from "@/data/js-objects/services";
import Link from "next/link";
import React from "react";

const Home4ServiceSection = ({ openModal }) => {
  // Optional: pass openModal if adding CTA

  return (
    <>
      <div className="home4-service-section mb-130">
        <div className="container">
          <div
            className="row justify-content-lg-end mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-10 col-lg-11">
              <div className="row g-4 justify-content-between align-items-end">
                <div className="col-xl-5 col-lg-6">
                  <div className="section-title2">
                    <h2>
                      <strong>Our Services</strong> Tailored for Your Business.
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-lg-end">
                  <div className="result-area">
                    <span>Exact Fit</span>
                    <p>
                      No Unnecessary Features.
                      <br />
                      Maximum Efficiency.
                    </p>
                    <svg
                      width={200}
                      height={6}
                      viewBox="0 0 200 6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM195 3.5L200 5.88675V0.113249L195 2.5V3.5ZM4.5 3.5H195.5V2.5H4.5V3.5Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-md-5 gy-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay={`${(index + 1) * 200}ms`}
                data-wow-duration="1500ms"
              >
                <div
                  className={`service-card3 h-100 ${
                    index % 3 === 0 ? "five" : index % 3 === 1 ? "two" : ""
                  } magnetic-item`}
                >
                  <div style={{ zIndex: 99 }} className="position-relative">
                    <h4>
                      <Link href={service.path}>
                        {service.title.split(" ").slice(0, -1).join(" ")} <br />
                        {service.title.split(" ").pop()}
                      </Link>
                    </h4>
                    <ul>
                      {service.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={service.path}
                    style={{ marginTop: "18px" }}
                    className="primary-btn3 three btn-hover"
                  >
                    View Details
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
                  </Link>
                  <svg
                    className="shape"
                    width={68}
                    height={250}
                    viewBox="0 0 68 250"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M68 0H60V250H68V0ZM48 173H40V250H48V173ZM20 73H28V250H20V73ZM8 134H0V250H8V134Z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home4ServiceSection;
