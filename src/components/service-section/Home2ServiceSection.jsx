"use client";
import React, { useState } from "react";
import ContactModal from "../shared/ContactModal";

const Home2ServiceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
                    I’ve always believed that good technology should feel
                    natural — like it was made exactly for the way you work.
                  </p>
                  <p>
                    Every business has its own rhythm, its own challenges, and
                    its own way of getting things done.
                  </p>
                  <p>
                    That quiet moment when everything just clicks and runs
                    smoothly… that’s the feeling I want every client to have.
                  </p>
                  <p>
                    So I build solutions that fit — nothing extra, nothing
                    missing, just what actually helps.
                  </p>
                  <p>
                    When the tool is actually right for you, the everyday stuff
                    stops being a battle.
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
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        pointOfSource="VisionSection" // Optional: track source
      />
    </>
  );
};

export default Home2ServiceSection;
