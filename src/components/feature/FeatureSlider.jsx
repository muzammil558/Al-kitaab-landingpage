import { slides } from "./featuresData";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Features() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="features"
      >
        <div className="features-imgs">
          {slides.map((item, idx) => {
            return (
              <div
                key={idx}
                className={
                  slide === idx ? "text-overlay" : "text-overlay-hidden"
                }
                style={{
                  backgroundImage: `url('${item.src}')`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover ",
                }}
              >
                <div className="txtContentWrapper">
                  <h3>{item.heading}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            );
          })}
          <span className="indicators">
            {slides.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      </motion.div>
    </>
  );
}
