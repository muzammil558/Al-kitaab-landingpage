import Header from "./components/header/Header";
import Player from "./components/player/Player";
import AboutUs from "./components/aboutUs/AboutUs";
import FeaturesF from "./components/feature/Features";
import PillarOfIslam from "./components/pillarOfIslam/PillarOfIslam";
import PrayerTiming from "./components/prayertiming/PrayerTiming";
import Donation from "./components/donation/Donation";
import AiChatBot from "./components/aichatbot/AiChatBot";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Player />
      <AboutUs />
      <FeaturesF />
      <PillarOfIslam />
      <PrayerTiming />
      <Donation />
      <AiChatBot />
      <div className="footerWrapper">
        <Download />
        <Footer />
      </div>
    </>
  );
}

export default App;
