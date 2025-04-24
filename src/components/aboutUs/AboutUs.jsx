import "./aboutUs.css";
import flower from "/assets/flower.png";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div id="about">
      <motion.div
        initial={{ opacity: 0, rotate: -180 }} // Start rotated
        whileInView={{ opacity: 1, rotate: 0 }} // Rotate to normal position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Runs only once
        className="flower"
      >
        <img id="flower_img" src={flower} alt="flower" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Trigger motion only after full visibility
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: "0.5" }}
        className="aboutUs-container"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="aboutUs-Contant"
        >
          <h1>About Us</h1>
          <p>
            Welcome to <b>Al-Kitaab</b>, your go-to application for an immersive and
            accessible Quranic experience. Our mission is to help you connect
            deeply with the Quran through interactive recitations, detailed
            tafsir, and personalized study plans. Crafted by a dedicated team of
            scholars and technologists, <b>Al-Kitaab</b> ensures authentic content and
            a seamless user experience. Whether youre a lifelong student or just
            beginning your journey, join our community and enrich your
            understanding of the Quran today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="aboutUs-img"
        >
          {/* <img src="/assets/masjid.png" alt="" /> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
