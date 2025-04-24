import "./pillar.css";
import pillar1 from "/assets/pillar1.png";
import pillar2 from "/assets/pillar2.png";
import pillar3 from "/assets/pillar3.png";
import pillar4 from "/assets/pillar4.png";
import pillar5 from "/assets/pillar5.png";
import { motion } from "framer-motion";
export default function PillarOfIslam() {
  return (
    <div className="pillar-container">
      <p>ESSENTIALS OF MUSLIM</p>
      <h2>5 Pillars Of Islam</h2>
      <div className="pillar-Content">
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pillar-img"
        >
          <img src={pillar1} alt="pillar 1" />
          <h4>Namaz</h4>
          <p>(Prayer)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pillar-img"
        >
          <img src={pillar2} alt="pillar 2" />
          <h4>Roza</h4>
          <p>(Fasting)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pillar-img"
        >
          <img src={pillar3} alt="pillar 3" />
          <h4>Hajj</h4>
          <p>(Pilgrimage)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pillar-img"
        >
          <img src={pillar4} alt="pillar 4" />
          <h4>Zakat</h4>
          <p>(Almsgiving)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pillar-img"
        >
          <img src={pillar5} alt="pillar 5" />
          <h4>Shahadah</h4>
          <p>(Faith)</p>
        </motion.div>
      </div>
    </div>
  );
}
