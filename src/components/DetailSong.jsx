import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="col-span-1 p-3">
      <p className="text-left font-bold text-cyan-400">Now playing</p>
      <p className="h-7 text-left text-2xl text-neutral-400 text-ellipsis">{song.name}</p>
      <div className="mt-16 flex items-center justify-center">
        <img
          className="w-64 h-64"
          src={song.links.images[0].url}
          alt="music thumbnail"
        />
      </div>
      <div className="flex h-24 items-center justify-evenly">
        <img
          className="w-16 h-16 rounded-full"
          src={song.links.images[1].url}
          alt="avatar"
        />
        <span className="text-xl text-white">Alan Walker</span>
      </div>
    </div>
  );
}
