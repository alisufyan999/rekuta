"use client";

import { useEffect, useRef, useState } from "react";

function useCounter(visible: boolean, end: number, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);

  return value;
}

export default function ClientCentricStats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Start counters when section is in view
  useEffect(() => {
    if (!rootRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  // Counters
  const v1 = useCounter(visible, 43000);
  const v2 = useCounter(visible, 11000, 1500);
  const v3 = useCounter(visible, 85, 1200);
  const v4 = useCounter(visible, 90, 1200);

  const nf = new Intl.NumberFormat("en-US");

  return (
    <section className="section-padding pb-0">
      <div className="container">
        <div ref={rootRef} className="stats-hero rounded-4 p-4 p-md-5 position-relative overflow-hidden">
          {/* Headline */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12">
            <h2 className="text-white text-center display-5 lh-sm mb-4 mb-md-5">
              Tailoring Success With A Client-Centric Approach
            </h2>
            </div>
          </div>

          {/* Counters */}
          <div className="row g-4 text-center text-white justify-content-center">
            <div className="col-6 col-lg-3">
              <div className="fs-3 fw-bold text-primary-emphasis counter-blue">
                {nf.format(v1)}
              </div>
              <div className="text-white small">
                Professionals we help start their next chapter
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fs-3 fw-bold text-primary-emphasis counter-blue">
                {nf.format(v2)}
              </div>
              <div className="text-white small">
                Organizations who we help acquire talent
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fs-3 fw-bold text-primary-emphasis counter-blue">
                {v3}%
              </div>
              <div className="text-white small">
                Of professionals refer us to a friend
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fs-3 fw-bold text-primary-emphasis counter-blue">
                {v4}%
              </div>
              <div className="text-white small">
                Of organizations recruit more than one role through us
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
