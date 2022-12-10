import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { DataSongs, song, SetSongHandler } = useContext(Songs);
  // console.table(DataSongs);
  const [idSong, setidSong] = useState(0);
  const SongHandler = (idSong) => {
    setidSong(idSong);
    SetSongHandler(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);

  return (
    <div className="col-span-2 overflow-hidden overflow-y-scroll bg-slate-800">
      <table className="relative w-full table-auto">
        <thead className="sticky top-0 bg-slate-700 text-white">
          <tr className="h-12">
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[12%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="h-full cursor-pointer bg-slate-800 text-neutral-400">
          {DataSongs.map((song, idx) => (
            <tr
              key={idx}
              className={`false h-14 hover:bg-slate-600 ${
                idSong === song.id && "bg-slate-600 text-cyan-400"
              }`}
              onClick={() => SongHandler(song.id)}
            >
              <td className="text-center">{idx + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download hover:text-green-400"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
