import Features from "./FeatureSlider";
import flower from "/assets/featureFlower.png";
import "./features.css";
import { motion } from "framer-motion";
export default function FeaturesF() {
  return (
    <div className="feature" id="features">
      <div className="featureContainer">
        <Features />
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Moves in from right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="featureContant"
        >
          <h1>Get The Best Features</h1>
          <p>
            Embark on a comprehensive Quranic journey with <b>Al-Kitaab</b>.
            Access accurate prayer timings, engage with interactive MCQs, and
            explore in-depth translations and tafsir. Enhance your understanding
            with our AI Chatbot and find tranquility through our meditation
            features. Whether youre deepening your knowledge or seeking daily
            spiritual connection, <b>Al-Kitaab</b> is your perfect companion.
            Join our community and enrich your Quranic experience today.{" "}
          </p>
          <button
            onClick={() =>
              document
                .getElementById("downloads")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Download Now
          </button>
        </motion.div>
      </div>
      <div>
        <img src={flower} className="featureFlower" alt="flower" />
      </div>
    </div>
  );
}
