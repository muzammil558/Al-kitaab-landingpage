import Navbar from "../navbar/Navbar";
import "./header.css";
import logo from "/assets/logo.png";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <div className="header" id="home">
      <Navbar />
      <div className="headerContent" id="AIchat">
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures animation runs once
        />
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures animation runs once
        >
          Your Comprehensive Quran Companion- Explore, Recite, Learn, and Engage
          with Ease
        </motion.h3>
        <div className="headerButton">
          <motion.button
            initial={{ opacity: 0, x: -20 }} // Moves in from left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="downloadNow"
            onClick={() =>
              document
                .getElementById("downloads")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Download Now
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }} // Moves in from right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="chatAi"
            onClick={() =>
              document
                .getElementById("chatai")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Chat with AI
          </motion.button>
        </div>
      </div>
    </div>
  );
}
