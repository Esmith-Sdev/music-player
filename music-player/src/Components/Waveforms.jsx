import { useState } from "react";
import { Waveform } from "@simform_solutions/react-native-audio-waveform";
export default function AudioWaveform({ path }) {
  const [waveformState, setWaveformState] = useState(null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <Waveform
      mode="static"
      path={path}
      onPlayerStateChange={(playerState) => {
        if (playerState === "playing") {
          setPlay(true);
        }

        if (playerState === "paused" || playerState === "stopped") {
          setPlay(false);
        }
      }}
      onPanStateChange={(isMoving) => {
        setIsSeeking(isMoving);
        console.log("User moving waveform:", isMoving);
      }}
    />
  );
}
