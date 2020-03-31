import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default ({hours, delayInMinutes, delayInSeconds}) => {
  return (
    <div style={{
      marginTop: "2em",
      display: "flex"
    }}>
      <CountdownCircleTimer
        isPlaying
        durationSeconds={hours * 3600}
        renderTime={value => `${Math.floor(value / 3600)} horas`}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      />
      <CountdownCircleTimer
        isPlaying
        durationSeconds={3600}
        initialRemainingTime={60 * delayInMinutes}
        renderTime={value => `${Math.floor(value / 60)} minutes`}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
      />
      <CountdownCircleTimer
        isPlaying
        durationSeconds={60}
        initialRemainingTime={delayInSeconds}
        renderTime={value => `${value} segundos`}
        colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        onComplete={() => [true, 1000]}
      />
    </div>
  );
}