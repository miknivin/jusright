"use client";
import { useRef } from "react";
import Counter from "../common/Counter";

export default function AboutCounters() {
  const ref3 = useRef(null);
  return (
    <>
      <div className="about-page-counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="row gy-md-5 gy-4">
              <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-start justify-content-sm-center divider">
                <div className="single-counter">
                  <h2>
                    <Counter
                      start={0}
                      end={10}
                      speed={100}
                      forwardedRef={ref3}
                      as="span"
                      className="counter"
                    />
                  </h2>
                  <p>World-Wide Branches</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-center divider">
                <div className="single-counter">
                  <h2>
                    <Counter
                      start={0}
                      end={50}
                      speed={20}
                      forwardedRef={ref3}
                      as="span"
                      className="counter"
                    />
                    +
                  </h2>
                  <p>Professional Expert</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-sm-center divider">
                <div className="single-counter">
                  <h2>
                    <Counter
                      start={0}
                      end={145}
                      speed={10}
                      forwardedRef={ref3}
                      as="span"
                      className="counter"
                    />
                    +
                  </h2>
                  <p>Completed Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center">
                <div className="single-counter">
                  <h2>
                    <Counter
                      start={0}
                      end={5}
                      speed={100}
                      forwardedRef={ref3}
                      as="span"
                      className="counter"
                    />
                    +
                  </h2>
                  <p>Year of Experienece</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
