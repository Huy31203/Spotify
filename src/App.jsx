import "./App.css";
import React, { useEffect, useState, } from "react";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import DataSongs from "./database/songs.json";
import Playing from "./components/Playing";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const SetSongHandler = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong) || DataSongs[0];
    setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, SetSongHandler }}>
        <Navbar />
        <div className="grid h-srceen-navbar-player grid-cols-3 bg-slate-700">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
