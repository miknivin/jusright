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
          <div className="row align-items-start gy-5">
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
                    natural, like it was built for the way you work.
                  </p>
                  <p>
                    Every business has its own way of working, and no two are
                    the same.
                  </p>
                  <p>
                    A good system fits your business instead of forcing your
                    business to fit the system. It makes work simpler, reduces
                    mistakes, and makes problems easier to understand when
                    they happen.
                  </p>
                  <p>
                    Building software like that takes more than coding. It
                    takes understanding how people work and designing around
                    their needs.
                  </p>
                  <p>
                    That’s why every solution I build is designed from the
                    ground up to fit your business.
                  </p>
                  <p>
                    When the system is right, work becomes smoother, clearer,
                    and easier every day.
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
