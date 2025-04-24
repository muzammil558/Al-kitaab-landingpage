import "./aiChatBot.css";
import flower from "/assets/flower.png";
import { motion } from "framer-motion";
export default function AiChatBot() {
  return (
    <div className="chatAI" id="chatai">
      <div className="aiFlower">
        <img src={flower} alt="Flower" className="Prayflower" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Trigger motion only after full visibility
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: "0.5" }}
        className="chatbot-container"
      >
        <motion.div 
         initial={{ opacity: 0, x: -100 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        className="chatbot-content">
          <h1>Coming Soon: AI Chatbot</h1>
          <p>
            Get ready to elevate your Quranic studies with our upcoming AI
            Chatbot feature. This intelligent assistant will provide instant
            answers to your queries, offer detailed explanations, and guide you
            through the Quran with ease. Whether you need help understanding a
            specific verse, want to explore various interpretations, or simply
            have a question about your readings, our AI Chatbot will be your
            knowledgeable companion. Stay tuned for a more interactive and
            enriching learning experience with <b> Al-Kitaab</b>.
          </p>
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, x: 100 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        className="chatbot-image"></motion.div>
      </motion.div>
    </div>
  );
}
