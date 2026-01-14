"use client";

import { useEffect } from "react";
import CheckMarkIcon from "@/components/icons/CheckMark";
import Home4ServiceSection from "../service-section/Home4ServiceSection";

export default function ServicesClient({ openModal }) {
  useEffect(() => {
    const serviceImgItem = document.querySelectorAll(
      ".sevices-wrap .single-services"
    );

    const followImageCursor = (event, item) => {
      const contentBox = item.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      item.children[1].style.transform = `translate(${dx}px, ${dy}px) rotate(25deg)`;
    };

    serviceImgItem.forEach((item) => {
      item.addEventListener("mousemove", (e) => followImageCursor(e, item));
    });

    return () => {
      serviceImgItem.forEach((item) => {
        item.removeEventListener("mousemove", (e) =>
          followImageCursor(e, item)
        );
      });
    };
  }, []);

  return (
    <>
      {/* Service Page Banner */}
      <div className="service-page-banner-section mb-130">
        <div className="container">
          <div className="banner-img-wrap">
            <div className="banner-img">
              <img
                src="/assets/img/innerpages/service-page-banner-img.webp"
                alt="Tailored software solutions"
              />
            </div>
            <div className="counter-wrap">
              <div className="counter-area">
                <div className="counter-content">
                  <div className="number">
                    <CheckMarkIcon />
                  </div>
                  <p>Made exactly for your needs</p>
                </div>
              </div>
              <div className="counter-area two">
                <div className="counter-content">
                  <div className="number">
                    <CheckMarkIcon />
                  </div>
                  <p>
                    Client <br /> Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-content-wrap">
            <div className="row gy-4 justify-content-between">
              <div className="col-xl-4 col-lg-5">
                <div className="banner-title">
                  <h2>Results-Driven Digital Solutions</h2>
                  <p>
                    “We build software that fits your business perfectly —
                    simple, fast, and made for real growth.”
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="banner-content">
                  <p>
                    We create custom software solutions that solve real business
                    problems — from complex ERPs to fast e-commerce stores,
                    smart automations, professional websites, and complete
                    startup packages.
                  </p>
                  <p>
                    Every project starts with understanding your goals and
                    challenges. We focus on delivering exactly what you need —
                    nothing more, nothing less — so you can work efficiently and
                    grow confidently.
                  </p>
                  <button
                    onClick={openModal}
                    className="primary-btn3 three btn-hover"
                  >
                    Start The Journey
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="home3-process-section mb-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="process-wrapper">
                <div
                  className="section-title three white mb-60 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>Working Step</span>
                  <h2>Solution of Process</h2>
                </div>

                <div className="process-card-area">
                  <div className="row gy-md-5 gy-4 justify-content-between">
                    <div
                      className="col-xl-5 col-md-6 wow animate fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="process-card2">
                        <div className="step-no">
                          <span>Step</span>
                          <strong>01</strong>
                        </div>
                        <h4>
                          Initial <br /> Consultation
                        </h4>
                      </div>
                    </div>

                    <div
                      className="col-xl-5 col-md-6 wow animate fadeInRight"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="process-card2 two">
                        <h4>
                          Strategy <br /> Development
                        </h4>
                        <div className="step-no">
                          <span>Step</span>
                          <strong>02</strong>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xl-7 col-md-6 wow animate fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="process-card2 three">
                        <h4>
                          Execution <br />& Launch
                        </h4>
                        <div className="step-no">
                          <span>Step</span>
                          <strong>03</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <svg
                    className="vector"
                    width={204}
                    height={650}
                    viewBox="0 0 204 650"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="theMotionPath11"
                      d="M0 1H79C90.0457 1 99 9.9543 99 21V280C99 291.046 107.954 300 119 300H183C194.046 300 203 308.954 203 320V629C203 640.046 194.046 649 183 649H110"
                    />
                    <circle cx={0} cy={0} r={3}>
                      <animateMotion
                        dur="4s"
                        begin="0s"
                        repeatCount="indefinite"
                        rotate="auto"
                      >
                        <mpath href="#theMotionPath11" />
                      </animateMotion>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* Founder/Why Section */}
            <div className="col-lg-5 p-0">
              <div className="founder-area">
                <div
                  className="founder-content wow animate fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <p>
                    We specialize in creating custom software that fits your
                    business exactly — from streamlined ERPs to fast e-commerce
                    platforms, smart automations, modern websites, and complete
                    startup packages.
                  </p>
                  <p>
                    Every solution is built to save time, reduce errors, and
                    help you grow — without unnecessary complexity.
                  </p>
                  <div className="founder-name-and-desig">
                    <h5>Nivin Michael</h5>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - This component might still contain client logic */}
      <Home4ServiceSection />
    </>
  );
}
