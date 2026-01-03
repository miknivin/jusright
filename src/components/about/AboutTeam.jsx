import Link from "next/link";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutTeam() {
  const teamSettings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".about-page-team-slider-next",
        prevEl: ".about-page-team-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="about-page-team-section mb-130">
        <div className="container">
          <div className="row align-items-lg-end mb-70">
            <div className="col-lg-4">
              <div className="result-area">
                <span>100%</span>
                <p>Measurable Results &amp; ROI.</p>
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
            <div className="col-xl-5 col-lg-6">
              <div className="section-title three">
                <h2>Our Dynamic Team</h2>
                <p>Smart solution to build a outstanding performance easily.</p>
              </div>
            </div>
          </div>
          <div className="team-slider-area mb-50">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...teamSettings}
                  className="swiper about-page-team-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="team-card two">
                        <div className="team-img">
                          <Link href="/team/details">
                            <img src="/assets/img/home4/team-img1.png" alt="" />
                          </Link>
                        </div>
                        <div className="team-content">
                          <h5>
                            <Link href="/team/details">Mr. Jorche Milton</Link>
                          </h5>
                          <span>CEO, Founder</span>
                          <svg
                            className="divider"
                            height={6}
                            viewBox="0 0 312 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                          </svg>
                          <ul className="social-list">
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-linkedin" />
                                </div>
                                <div className="content">
                                  <span>LinkedIn</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-facebook" />
                                </div>
                                <div className="content">
                                  <span>Facebook</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="team-card two">
                        <div className="team-img">
                          <Link href="/team/details">
                            <img src="/assets/img/home4/team-img2.png" alt="" />
                          </Link>
                        </div>
                        <div className="team-content">
                          <h5>
                            <Link href="/team/details">Robert Jhonson</Link>
                          </h5>
                          <span>CTO, Co-founder</span>
                          <svg
                            className="divider"
                            height={6}
                            viewBox="0 0 312 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                          </svg>
                          <ul className="social-list">
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-linkedin" />
                                </div>
                                <div className="content">
                                  <span>LinkedIn</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-facebook" />
                                </div>
                                <div className="content">
                                  <span>Facebook</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="team-card two">
                        <div className="team-img">
                          <Link href="/team/details">
                            <img src="/assets/img/home4/team-img3.png" alt="" />
                          </Link>
                        </div>
                        <div className="team-content">
                          <h5>
                            <Link href="/team/details">Daniel Ryan</Link>
                          </h5>
                          <span>Chief Operating Officer</span>
                          <svg
                            className="divider"
                            height={6}
                            viewBox="0 0 312 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                          </svg>
                          <ul className="social-list">
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-linkedin" />
                                </div>
                                <div className="content">
                                  <span>LinkedIn</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-facebook" />
                                </div>
                                <div className="content">
                                  <span>Facebook</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="team-card two">
                        <div className="team-img">
                          <Link href="/team/details">
                            <img src="/assets/img/home4/team-img5.png" alt="" />
                          </Link>
                        </div>
                        <div className="team-content">
                          <h5>
                            <Link href="/team/details">Alexander Benjamin</Link>
                          </h5>
                          <span>Director of Engineering</span>
                          <svg
                            className="divider"
                            height={6}
                            viewBox="0 0 312 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                          </svg>
                          <ul className="social-list">
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-linkedin" />
                                </div>
                                <div className="content">
                                  <span>LinkedIn</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-facebook" />
                                </div>
                                <div className="content">
                                  <span>Facebook</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="team-card two">
                        <div className="team-img">
                          <Link href="/team/details">
                            <img
                              src="/assets/img/innerpages/team-img1.png"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="team-content">
                          <h5>
                            <Link href="/team/details">Benjamin Lucas</Link>
                          </h5>
                          <span>Senior Sotware Engineer</span>
                          <svg
                            className="divider"
                            height={6}
                            viewBox="0 0 312 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                          </svg>
                          <ul className="social-list">
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-linkedin" />
                                </div>
                                <div className="content">
                                  <span>LinkedIn</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-facebook" />
                                </div>
                                <div className="content">
                                  <span>Facebook</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="team-card two">
                        <div className="team-img">
                          <Link href="/team/details">
                            <img
                              src="/assets/img/innerpages/team-img2.png"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="team-content">
                          <h5>
                            <Link href="/team/details">Samuel Henry</Link>
                          </h5>
                          <span>Senior Sotware Engineer</span>
                          <svg
                            className="divider"
                            height={6}
                            viewBox="0 0 312 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                          </svg>
                          <ul className="social-list">
                            <li>
                              <a
                                href="https://www.linkedin.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-linkedin" />
                                </div>
                                <div className="content">
                                  <span>LinkedIn</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                className="social-area"
                              >
                                <div className="icon">
                                  <i className="bx bxl-facebook" />
                                </div>
                                <div className="content">
                                  <span>Facebook</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="slider-btn-grp three">
              <div className="slider-btn about-page-team-slider-prev">
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
              <div className="slider-btn about-page-team-slider-next">
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
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <Link
                href="/career"
                className="primary-btn3 transparent three btn-hover"
              >
                Join Our Team
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
