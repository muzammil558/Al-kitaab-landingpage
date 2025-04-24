// import React from "react";
import logo from "/assets/logo.png";
import Audio from "./Audio";
// import surah from "/assets/surahFatiha.mp3";
import "./player.css";
import { useState, useRef, useEffect ,useCallback} from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { fetchRecitation } from "../../data/features";
import { name_chapter } from "../../data/features";
import { motion } from "framer-motion";
// import audioData from "/data/audioData";
export default function Player() {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioSrc, setAudioSrc] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [engName, setengName] = useState("");
  const [meaning, setmeaning] = useState("");
  const [verse, setVerse] = useState("");
  const audioRef = useRef();
  const videoRef = useRef();
  
  const getRecitation = useCallback(async () => {
    try {
      const randomChapter = Math.floor(Math.random() * 114) + 1;
      const data = await fetchRecitation(1, randomChapter);
      const chapterName = await name_chapter(randomChapter);
      
      const combinedData = `${chapterName.chapter.id}:${chapterName.chapter.verses_count}`;
      
      setArabicName(chapterName.chapter.name_arabic);
      setengName(chapterName.chapter.name_simple);
      setmeaning(chapterName.chapter.translated_name.name);
      setAudioSrc(data.audio_file.audio_url);
      setVerse(combinedData);
    } catch (error) {
      console.error("Failed to fetch recitation:", error);
    }
  }, []); // Empty dependency array ensures it's created only once
  
  useEffect(() => {
    getRecitation();
  }, [getRecitation]); 

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    if (!isPlaying) {
      setIsPlaying(true);
      videoRef.current?.play();
      audio.play();
    } else {
      setIsPlaying(false);
      videoRef.current?.pause();
      audio.pause();
    }
  };
  const onChange = (e) => {
    setPercentage(e.target.value);
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
  };
  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };
  function secondsToHms(seconds) {
    if (!seconds || seconds < 0) return "00:00";

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    let formattedHours = hours > 0 ? `${hours}:` : "";
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = secs < 10 ? `0${secs}` : secs;

    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <motion.div

    className="player-container">
      <div className="player">
        <div className="player_logo">
          <video
            src="/assets/BgVideo.mp4"
            // autoPlay
            controls={false}
            loop={true}
            muted={true}
            playsInline
            preload="auto"
            ref={videoRef}
          />
          <img src={logo} alt="Logo" />
        </div>
        <div className="player_content">
          <div className="player_text">
            <div className="eng-text">
              <h3>{engName}</h3>
              {/* <h5>Verses: {verse}</h5> */}
              <p>{meaning}</p>
            </div>
            <div className="arabic-text">
              <h3>{arabicName}</h3>
            </div>
          </div>
          <div className="Play-button">
            <button onClick={play}>
              {isPlaying ? (
                <PauseIcon sx={{ color: "white" }} />
              ) : (
                <PlayArrowIcon sx={{ color: "white" }} />
              )}
            </button>
            <p>{secondsToHms(currentTime)}</p>
            <div className="audio">
              <Audio onChange={onChange} percentage={percentage} />
              {audioSrc && (
                <audio
                  ref={audioRef}
                  src={audioSrc}
                  onTimeUpdate={getCurrDuration}
                  onLoadedData={(e) =>
                    setDuration(e.currentTarget.duration.toFixed(2))
                  }
                ></audio>
              )}
            </div>
            <p>{secondsToHms(duration)}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
