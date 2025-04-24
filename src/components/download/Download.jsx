import "./download.css";
import { motion } from "framer-motion";
export default function Download() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }} 
    className="download-container" id="downloads">
      <div className="download-image"></div>
      <div className="download-content">
        <h1>Start your Spiritual Journey Today</h1>
        <p>
          Experience the full features of <b> Al-Kitaab</b> and enhance your
          Quranic journey. Get the app today and start exploring accurate prayer
          timings, interactive MCQs, in-depth translations and tafsir, AI
          Chatbot assistance, and calming meditation sessions. Available on both
          iOS and Android.
        </p>
        <div className="download-button-container">
          <p>Get the App now</p>
          <div className="download-button">
            <button onClick={() => window.open("https://play.google.com/store/apps/details?id=com.irenictech.alkitaab&pcampaignid=web_share", "_blank")} className="android"></button>
            <button onClick={() => window.open("https://apps.apple.com/us/app/al-kitaab-quran-and-peace/id6480166878", "_blank")}  className="iso"></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
