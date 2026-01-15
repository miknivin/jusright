"use client";

import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import Link from "next/link";
import Counter from "../common/Counter";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ContactModal from "../shared/ContactModal";

SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Home5Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // Pass openModal from parent to trigger form
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination1", clickable: true },
    };
  }, []);

  return (
    <div className="home5-banner-section mb-130">
      <div className="container-fluid p-0">
        <div className="row g-0 justify-content-between">
          <div className="col-lg-7">
            <div className="banner-content-wrap">
              <div className="banner-content">
                <div className="sub-title">
                  <span>Lean & Tailored</span>
                  <svg
                    width={20}
                    height={13}
                    viewBox="0 0 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.20537 11.1647C8.37928 11.6946 7.40404 12 6.36364 12C3.42126 12 1 9.55766 1 6.5C1 3.44234 3.42126 1 6.36364 1C7.40404 1 8.37928 1.30536 9.20537 1.83531C8.01385 3.01658 7.27344 4.66997 7.27344 6.5C7.27344 8.33003 8.01385 9.98342 9.20537 11.1647ZM10.0004 11.8347C8.96953 12.5692 7.71584 13 6.36364 13C2.8491 13 0 10.0898 0 6.5C0 2.91015 2.8491 0 6.36364 0C7.71584 0 8.96953 0.430784 10.0004 1.16532C11.0312 0.430784 12.2849 0 13.6371 0C17.1516 0 20.0007 2.91015 20.0007 6.5C20.0007 10.0898 17.1516 13 13.6371 13C12.2849 13 11.0312 12.5692 10.0004 11.8347ZM10.7953 1.83531C11.6214 1.30536 12.5967 1 13.6371 1C16.5794 1 19.0007 3.44234 19.0007 6.5C19.0007 9.55766 16.5794 12 13.6371 12C12.5967 12 11.6214 11.6946 10.7953 11.1647C11.9869 9.98342 12.7273 8.33003 12.7273 6.5C12.7273 4.66997 11.9869 3.01658 10.7953 1.83531ZM10.0004 2.45755C11.06 3.45924 11.7273 4.89483 11.7273 6.5C11.7273 8.10516 11.06 9.54076 10.0004 10.5424C8.94071 9.54076 8.27344 8.10516 8.27344 6.5C8.27344 4.89483 8.94071 3.45924 10.0004 2.45755Z"
                      fill="#60E59D"
                    />
                  </svg>
                  <span>Value-Driven</span>
                </div>
                <h1>Custom Software Built Exactly for Your Business</h1>
                <div className="btn-and-rating-area">
                  <button className="primary-btn5" onClick={openModal}>
                    Get Free Needs Audit
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
                  </button>
                </div>
              </div>
              <div className="contact-area">
                <ul className="contact-list">
                  <li className="single-contact">
                    <a href="mailto:hello@justrighttech.co">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* mail icon path */}
                      </svg>
                      hello@justrighttech.co
                    </a>
                  </li>
                  <li className="single-contact">
                    <a href="tel:+919876543210">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* phone icon path */}
                      </svg>
                      +91 6238002737
                    </a>
                  </li>
                </ul>
                <svg className="divider-shape" /* unchanged */ />
                <span />
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-lg-block d-none">
            <div className="banner-img-wrap">
              {/* <div className="counter-area">
                <div className="counter-wrap">
                  <div className="counter-content">
                    <div className="number">
                      <Counter
                        start={0}
                        end={30}
                        speed={100}
                        as="h4"
                        className="counter"
                      />
                      <span>%</span>
                    </div>
                    <span>Avg. Cost Savings for Clients</span>
                  </div>
                  <img
                    src="/assets/img/home5/globe.gif"
                    alt=""
                    className="vector"
                  />
                </div>
              </div> */}
              <Swiper {...settings} className="swiper home5-banner-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-img">
                      <img src="/assets/img/home5/banner-img1.webp" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-img">
                      <img src="/assets/img/home5/banner-img2.webp" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-img">
                      <img src="/assets/img/home5/banner-img3.webp" alt="" />
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="swiper-pagination1" />
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        pointOfSource={"Banner"}
      />
    </div>
  );
};

export default Home5Banner;
