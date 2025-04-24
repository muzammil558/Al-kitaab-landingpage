import dayjs from "dayjs";

export const slides = [
  {
    src: "/assets/featureImg1.png",
    alt: "Image 1 for feature",
    heading: "Test your Knowledge",
    p: "Enhance your understanding of the Quran with Al-Kitaab's interactive MCQ feature. Test your knowledge through engaging quizzes designed to reinforce your learning and track your progress. Our app offers a variety of questions on all the surahs, helping you deepen your Knowledge.",
  },
  {
    src: "/assets/featureImg2.png",
    alt: "Image 2 for feature",
    heading: "Prayer Timings",
    p: "Never miss a prayer with Al-Kitaab's accurate prayer timing feature. Our app provides precise Salah times based on your location, complete with customizable reminders to keep you on schedule. Whether you're at home or on the go, stay connected to your faith with ease and convenience.",
  },
  {
    src: "/assets/featureImg3.png",
    alt: "Image 3 for feature",
    heading: "Meditation",
    p: "Find peace with Al-Kitaab's meditation and relaxation feature. Immerse yourself in serene recitations and calming audio designed to help you meditate and reflect on the Quran. Whether you need a moment of calm during a busy day or a guided session to deepen your spiritual connection.",
  },
  {
    src: "/assets/featureImg4.png",
    alt: "Image 4 for feature",
    heading: "Translation & Tafsir",
    p: "Deepen your understanding of the Quran with Al-Kitaab's comprehensive Translation and Tafsir feature. Access accurate translations and detailed interpretations to gain insights into the meanings and context of the verses. Whether you are studying a specific Surah or exploring the entire Quran.",
  },
];
export const salah = [
  {
    pray: "fajr",
    img:"/assets/fajr.png"
  },
  {
    pray: "dhuhr",
    img:"/assets/dhuhr.png"
  },
  {
    pray: "Asr",
    img:"/assets/asr.png"
  },
  {
    pray: "maghrib",
    img:"/assets/maghrib.png"
  },
  {
    pray: "Isha",
    img:"/assets/isha.png"
  },
];
export const getPrayerTime = async (location, setPrayerTimings) => {
  const {longitude, latitude} = location;
  const date = dayjs(new Date()).format('DD-MM-YYYY');
  try {
    const response = await fetch(
      `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=2`,
    );
    const prayerTimeData = await response.json();
    setPrayerTimings(prayerTimeData?.data?.timings);
    return Promise.resolve(prayerTimeData?.data?.timings);
  } catch (error) {
    console.log('🚀 ~ getPrayerTime ~ error:', error);
    throw new Error('Something went wrongs!', error.message);
  }
};


// https://api.aladhan.com/v1/timings/17-12-2024?latitude=24.831087&longitude=67.075510&method=2