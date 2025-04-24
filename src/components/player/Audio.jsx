import { useState, useEffect, useRef } from "react";
export default function Audio({ onChange, percentage = 0 }) {
  const [position, setPosition] = useState();
  const [marginLeft, setMarginLeft] = useState(-20);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const rangeRef = useRef();
  const thumbRef = useRef();
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;

    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setProgressBarWidth(centerProgressBar);
    setMarginLeft(centerThumb);
    setPosition(percentage);
  }, [percentage]);
  return (
   
      <div className="slider-container">
        <div
          className="progress-bar-cover"
          style={{
            width: `${progressBarWidth}px`,
          }}
        ></div>
        <div
          className="thumb"
          ref={thumbRef}
          style={{
            left: `${position}%`,
            marginLeft: `${marginLeft}px`,
          }}
        ></div>
        <input
          type="range"
          ref={rangeRef}
          step="0.01"
          className="range"
          onChange={onChange}
          value={position}
        />
      </div>
  );
}
