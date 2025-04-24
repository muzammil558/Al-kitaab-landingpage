import { useEffect, useState } from "react";
import "./prayertiming.css";
import flower from "/assets/flower.png";
import { salah, getPrayerTime } from "../../data/features";
import { motion } from "framer-motion";

import shalat from "/assets/shalat.png";
import mosque from "/assets/mosque.png";

const pray = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

export default function PrayerTiming() {
  const [prayerTimings, setPrayerTimings] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // If location is allowed, use the provided latitude and longitude
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => {
        // If location access is denied, set default latitude and longitude
        setLat(21.42251); // Default latitude
        setLon(39.826168); // Default longitude
      }
    );
  }, []); // Runs only once after the first render

  useEffect(() => {
    if (lat && lon) {
      fetchPrayersTimings();
    }
  }, [lat, lon]); // Runs whenever lat or lon changes

  const fetchPrayersTimings = async () => {
    const location = {
      latitude: lat,
      longitude: lon,
    };

    try {
      await getPrayerTime(location, setPrayerTimings);
    } catch (error) {
      console.log("Error fetching timings ==> ", error);
    }
  };
  return (
    <div className="prayer" id="prayerTimings">
      <div className="prayerFlower">
        <img src={flower} alt="Flower" className="Prayflower" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Trigger motion only after full visibility
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: "0.5" }}
        className="pray-Container"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pray-content"
        >
          <h1>Prayer Timings</h1>
          <p>
            Stay connected to your faith with <b>Al-Kitaab&apos;s</b> precise
            and customizable prayer timing feature. Our app provides accurate
            prayer times based on your location, ensuring you never miss a
            prayer. With reminders for each Salah, you can stay punctual and
            mindful throughout the day. Enhance your spiritual routine with our
            easy-to-use interface and never miss a prayer again.Join us and
            let <b>Al-Kitaab</b> help you maintain your daily worship with ease
            and convenience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Moves in from left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="timing"
        >
          <div className="salah">
            <div className="topic">
              <img src={mosque} alt="salah" />
              <h3>Salah</h3>
            </div>
            <div className="name-container">
              {salah.map((item, index) => (
                <div className="prayer-name" key={index}>
                  <img src={item.img} alt={item.pray} />
                  <p>{item.pray}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="time">
            <div className="topic">
              <img src={shalat} alt="shalat" />
              <h3>Prayer Timing</h3>
            </div>
            <div className="name-container">
              {prayerTimings ? (
                pray.map((item, index) => (
                  <div key={index} className="prayer-name time">
                    <p>{prayerTimings[item] || "Not available"}</p>
                  </div>
                ))
              ) : (
                <p>Loading prayer timings...</p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
