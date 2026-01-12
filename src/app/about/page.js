"use client";

import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

import ThemeAndLayoutWrapper from "@/components/layout/ThemeAndLayoutWrapper";
import Header5 from "@/components/header/Header5";
import Home5Footer from "@/components/Footer/Home5Footer";
import Home5TestimonialSection from "@/components/testimonial-section/Home5TestimonialSection";
import Home2ServiceSection from "@/components/service-section/Home2ServiceSection";

const AboutPage = ({ openModal }) => {
  const [isOpenimg, setOpenimg] = React.useState({
    openingState: false,
    openingIndex: 0,
  });

  const bannerSettings = React.useMemo(() => {
    return {
      spaceBetween: 24,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        280: { slidesPerView: 1 },
        350: { slidesPerView: 2, spaceBetween: 10 },
        576: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6, spaceBetween: 15 },
        1400: { slidesPerView: 6 },
      },
    };
  }, []);

  return (
    <>
      <ThemeAndLayoutWrapper>
        <Header5 openModal={openModal} />
        <div className="breadcrumb-section mb-130">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="banner-content">
                  <h1>
                    Tailored Software
                    <br />
                    Built Just Right
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
                      About Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-page-banner-section mb-130">
          <div className="slider-area mb-70">
            <Swiper
              {...bannerSettings}
              className="swiper about-page-banner-slider"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="single-img">
                    <img
                      src="assets/img/innerpages/about-page-banner-img1.webp"
                      alt="Happy Indian professional satisfied with custom software"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="vector">
                    <img
                      src="assets/img/innerpages/about-page-banner-vector1.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-img two">
                    <img
                      src="assets/img/innerpages/about-page-banner-img2.webp"
                      alt="Happy Indian professional satisfied with custom software"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-img three">
                    <img
                      src="assets/img/innerpages/about-page-banner-img3.webp"
                      alt="Happy Indian professional satisfied with custom software"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="vector">
                    <img
                      src="assets/img/innerpages/about-page-banner-vector2.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="single-img two">
                    <img
                      src="assets/img/innerpages/about-page-banner-img4.webp"
                      alt="Happy Indian professional satisfied with custom software"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>

          <div className="banner-content-wrap">
            <div className="container">
              <div className="row gy-4 justify-content-between">
                <div className="col-xl-5 col-lg-6">
                  <div className="title-area">
                    <h2>We Build Software That Fits Your Business Perfectly</h2>
                    <span>
                      “Custom solutions crafted just right — no unnecessary
                      features, no wasted costs.”
                    </span>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="banner-content">
                    <p>
                      We specialize in creating custom ERPs, AI-powered
                      automations, e-commerce solutions, and websites — all
                      built from the ground up to match your exact needs.
                    </p>
                    <p>
                      From startups to growing businesses, we focus on
                      delivering lean, efficient systems that streamline
                      operations, save time, and scale with you. Every project
                      is tailored, transparent, and designed to give you real
                      results.
                    </p>
                    <button
                      onClick={openModal}
                      className="primary-btn3 transparent three btn-hover"
                    >
                      <div>Get Free Needs Audit</div>
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

        <div className="about-page-feature-section">
          <div className="container">
            <div
              className="row justify-content-center mb-70 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-xl-6 col-lg-8">
                <div className="section-title2">
                  <div className="shape-and-title-area">
                    <svg
                      width={88}
                      height={64}
                      viewBox="0 0 88 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M88 0V64H0L88 0Z" />
                      <path d="M60 8L10 44V8H60Z" />
                    </svg>
                    <h2>Why Businesses Trust Us</h2>
                  </div>
                  <p>
                    We deliver custom software that solves real problems —
                    efficiently and transparently.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-50">
              <div
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <h4>
                    Tailored
                    <br />
                    Solutions
                  </h4>
                  <ul>
                    <li>Custom ERPs & automations</li>
                    <li>E-commerce platforms</li>
                    <li>Professional websites</li>
                  </ul>
                  <p>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                        <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                      </g>
                    </svg>
                    We build exactly what your business needs — no more, no
                    less.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <h4>
                    Efficient
                    <br />
                    Delivery
                  </h4>
                  <ul>
                    <li>Fast development timelines</li>
                    <li>Regular updates & communication</li>
                    <li>Clear, transparent process</li>
                  </ul>
                  <p>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                        <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                      </g>
                    </svg>
                    Faster rollout and lower long-term costs through lean,
                    focused development.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="single-feature">
                  <h4>
                    Real
                    <br />
                    Results
                  </h4>
                  <ul>
                    <li>Streamlined operations</li>
                    <li>Time & cost savings</li>
                    <li>Systems that grow with you</li>
                  </ul>
                  <p>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M13.5263 8.297C10.5619 6.97028 8.38276 4.27662 7.77418 1C7.16559 4.27662 4.98647 6.97028 2.02207 8.297C1.45275 8.55833 0 8.96037 0 8.96037C0 8.96037 1.43312 9.36241 2.02207 9.62373C4.98647 10.9505 7.16559 13.6642 7.77418 16.9207C8.38276 13.6441 10.5619 10.9505 13.5263 9.62373C14.0956 9.36241 15.5484 8.96037 15.5484 8.96037C15.5484 8.96037 14.1152 8.55833 13.5263 8.297Z" />
                        <path d="M20.8023 15.9137C19.0355 15.1297 17.7594 13.5216 17.3864 11.5918C17.033 13.5216 15.7373 15.1297 13.9705 15.9137C13.6367 16.0745 12.7729 16.2957 12.7729 16.2957C12.7729 16.2957 13.6171 16.5369 13.9705 16.6776C15.7373 17.4616 17.0134 19.0697 17.3864 20.9995C17.7594 19.0898 19.0355 17.4817 20.8023 16.6977C21.1361 16.5369 21.9999 16.3158 21.9999 16.3158C21.9999 16.3158 21.1361 16.0745 20.8023 15.9137Z" />
                      </g>
                    </svg>
                    Solutions designed to deliver measurable improvements and
                    lasting value.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="row justify-content-center wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-xl-8 col-lg-10">
                <div className="contact-btn-area two">
                  <h6>
                    Ready to build software that fits your business perfectly?
                  </h6>
                  <button
                    onClick={openModal}
                    className="primary-btn3 two btn-hover"
                  >
                    Get Your Free Needs Audit
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

        <Home2ServiceSection />

        <Home5TestimonialSection />
        <Home5Footer openModal={openModal} />
      </ThemeAndLayoutWrapper>
    </>
  );
};

export default AboutPage;
