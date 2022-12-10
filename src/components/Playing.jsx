import React, { useContext } from "react";
import { Songs } from "../Context";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Playing() {
  const { song, SetSongHandler } = useContext(Songs);
  const handleNext = () => {
    SetSongHandler(song.id + 1);
  };
  const handlePrev = () => {
    SetSongHandler(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="h-24 !bg-slate-900 !text-white"
        src={song.url}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleNext}
        onClickPrevious={handlePrev}
        onEnded={handleNext}
      />
    </div>
  );
}
