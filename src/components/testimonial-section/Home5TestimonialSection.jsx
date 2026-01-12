"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home5TestimonialSection = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: { delay: 4000, disableOnInteraction: false },
      navigation: {
        nextEl: ".testimonial-slider-next",
        prevEl: ".testimonial-slider-prev",
      },
      pagination: { el: ".franctional-pagi", type: "fraction" },
    };
  }, []);

  return (
    <>
      <div className="home5-testimonial-section mb-130">
        <div className="container">
          <div
            className="row justify-content-center mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-4">
              <div className="section-title four text-center">
                <span>Proven Results</span>
                <h2>What Clients Say</h2>
              </div>
            </div>
          </div>

          <Swiper
            {...settings}
            className="swiper home2-testimonial-slider mb-50"
          >
            <div className="swiper-wrapper">
              {/* Testimonial 1: Hiranmayan, Qoncept Ads */}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card4 two">
                  <div className="row g-4 justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                      <div className="testimonial-img">
                        <img
                          src="/assets/img/home4/testimonial-img1.webp"
                          alt="Hiranmayan"
                        />
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7">
                      <div className="testimonial-content-wrap">
                        <div className="testimonial-content">
                          <span>Excellent Custom CRM</span>
                          <p>
                            The custom CRM streamlined our sales tracking and
                            assignments perfectly. With a straightforward UI
                            suited to our team's needs, we saw more closings and
                            easier contact management. Delivered in just 2
                            weeks—still in use today.
                          </p>
                          <div className="author-area">
                            <h5>Hiranmayan</h5>
                            <span>COO, Advertising Agency</span>
                          </div>
                          <svg
                            className="quote"
                            width={82}
                            height={62}
                            viewBox="0 0 82 62"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M19.6108 0.933105C30.9977 0.933105 39.2188 10.2605 39.2188 24.073C39.1475 44.1391 23.9423 58.3265 2.00629 61.0501C-0.0258198 61.3048 -0.810142 58.5034 1.06154 57.6793C9.47517 53.9653 13.7283 49.2538 14.2774 44.5919C14.6873 41.1078 12.78 38.0553 10.3807 37.4823C4.16674 36.0002 0.00270078 28.3211 0.00270078 20.3873C0.00270078 15.2277 2.06854 10.2795 5.74577 6.63111C9.42299 2.98274 14.4104 0.933105 19.6108 0.933105ZM62.3919 0.933105C73.7789 0.933105 82 10.2605 82 24.073C81.9287 44.1391 66.7235 58.3265 44.7875 61.0501C42.7554 61.3048 41.9711 58.5034 43.8427 57.6793C52.2564 53.9653 56.5095 49.2538 57.0586 44.5919C57.4685 41.1078 55.5612 38.0553 53.1619 37.4823C46.9479 36.0002 42.7839 28.3211 42.7839 20.3873C42.7839 15.2277 44.8497 10.2795 48.527 6.63111C52.2042 2.98274 57.1916 0.933105 62.3919 0.933105Z" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 2: Subilal K, Ibarc */}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card4 two">
                  <div className="row g-4 justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                      <div className="testimonial-img">
                        <img
                          src="/assets/img/home4/testimonial-img2.webp"
                          alt="Sahir"
                        />
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7">
                      <div className="testimonial-content-wrap">
                        <div className="testimonial-content">
                          <span>Reliable Custom Development</span>
                          <p>
                            Delivered high-quality custom websites and complex
                            business automations that solved real problems
                            efficiently. Professional and effective work.
                          </p>
                          <div className="author-area">
                            <h5>Sahir Ali</h5>
                            <span>
                              CTO, Business consulting and automation services
                              company
                            </span>
                          </div>
                          <svg
                            className="quote"
                            width={82}
                            height={62}
                            viewBox="0 0 82 62"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M19.6108 0.933105C30.9977 0.933105 39.2188 10.2605 39.2188 24.073C39.1475 44.1391 23.9423 58.3265 2.00629 61.0501C-0.0258198 61.3048 -0.810142 58.5034 1.06154 57.6793C9.47517 53.9653 13.7283 49.2538 14.2774 44.5919C14.6873 41.1078 12.78 38.0553 10.3807 37.4823C4.16674 36.0002 0.00270078 28.3211 0.00270078 20.3873C0.00270078 15.2277 2.06854 10.2795 5.74577 6.63111C9.42299 2.98274 14.4104 0.933105 19.6108 0.933105ZM62.3919 0.933105C73.7789 0.933105 82 10.2605 82 24.073C81.9287 44.1391 66.7235 58.3265 44.7875 61.0501C42.7554 61.3048 41.9711 58.5034 43.8427 57.6793C52.2564 53.9653 56.5095 49.2538 57.0586 44.5919C57.4685 41.1078 55.5612 38.0553 53.1619 37.4823C46.9479 36.0002 42.7839 28.3211 42.7839 20.3873C42.7839 15.2277 44.8497 10.2795 48.527 6.63111C52.2042 2.98274 57.1916 0.933105 62.3919 0.933105Z" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial 3: Jumarashiq, topcodemedia */}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card4 two">
                  <div className="row g-4 justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                      <div className="testimonial-img">
                        <img
                          src="/assets/img/home4/testimonial-img3.webp"
                          alt="Jumarashiq"
                        />
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-7">
                      <div className="testimonial-content-wrap">
                        <div className="testimonial-content">
                          <span>Fast & Complete Launch</span>
                          <p>
                            Kickstarted our business in just 2 weeks—complete
                            domain setup, custom website development,
                            deployment, and professional email configuration.
                            Everything was ready to go quickly and efficiently.
                          </p>
                          <div className="author-area">
                            <h5>Jumarashiq</h5>
                            <span>CEO, Digital agency</span>
                          </div>
                          <svg
                            className="quote"
                            width={82}
                            height={62}
                            viewBox="0 0 82 62"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M19.6108 0.933105C30.9977 0.933105 39.2188 10.2605 39.2188 24.073C39.1475 44.1391 23.9423 58.3265 2.00629 61.0501C-0.0258198 61.3048 -0.810142 58.5034 1.06154 57.6793C9.47517 53.9653 13.7283 49.2538 14.2774 44.5919C14.6873 41.1078 12.78 38.0553 10.3807 37.4823C4.16674 36.0002 0.00270078 28.3211 0.00270078 20.3873C0.00270078 15.2277 2.06854 10.2795 5.74577 6.63111C9.42299 2.98274 14.4104 0.933105 19.6108 0.933105ZM62.3919 0.933105C73.7789 0.933105 82 10.2605 82 24.073C81.9287 44.1391 66.7235 58.3265 44.7875 61.0501C42.7554 61.3048 41.9711 58.5034 43.8427 57.6793C52.2564 53.9653 56.5095 49.2538 57.0586 44.5919C57.4685 41.1078 55.5612 38.0553 53.1619 37.4823C46.9479 36.0002 42.7839 28.3211 42.7839 20.3873C42.7839 15.2277 44.8497 10.2795 48.527 6.63111C52.2042 2.98274 57.1916 0.933105 62.3919 0.933105Z" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>

          {/* Navigation Arrows */}
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="slider-btn-grp">
                <div
                  style={{ cursor: "pointer" }}
                  className="slider-btn testimonial-slider-prev"
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="slider-btn testimonial-slider-next"
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5TestimonialSection;
