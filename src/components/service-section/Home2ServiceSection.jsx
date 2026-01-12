"use client";
import React from "react";

const Home2ServiceSection = ({ openModal }) => {
  return (
    <>
      <div className="home2-global-map-section mb-130">
        <div className="container">
          <div className="row align-items-center gy-5">
            {/* Photo Left */}
            <div className="col-lg-4 offset-lg-1">
              <div className="text-center">
                <img
                  src="/assets/img/nivin-michael.webp" // Your real photo path
                  alt="Nivin Michael"
                  className="img-fluid rounded shadow"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            {/* Text Right */}
            <div className="col-lg-7">
              <div className="banner-content w-100">
                <div className="section-title two white w-100">
                  <h2>The Reason Behind All This</h2>
                  <p>
                    I’ve always felt that good technology shouldn’t be locked
                    behind big budgets or complex setups.
                  </p>
                  <p>
                    Every business — small shop, growing startup, or family-run
                    operation — should be able to use tools that make work
                    easier, save time, and keep mistakes low.
                  </p>
                  <p>
                    That quiet satisfaction when everything just works smoothly…
                    that’s what I want every client to feel.
                  </p>
                  <p>
                    So I build solutions that fit exactly — nothing extra,
                    nothing missing.
                  </p>
                  <p>
                    Because when the right tool is there, the real work can
                    begin.
                  </p>
                  <p
                    className="mt-30"
                    style={{ fontSize: "1.1rem", opacity: "0.9" }}
                  >
                    — Nivin Michael
                  </p>
                  <button
                    onClick={openModal}
                    className="primary-btn5 two white-bg d-lg-flex d-none mt-4"
                  >
                    Let’s Talk About Your Business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="globe-area">
          <img
            src="/assets/img/home2/globe-shape.png"
            alt=""
            className="globe-vector"
          />
        </div>
      </div>
    </>
  );
};

export default Home2ServiceSection;
