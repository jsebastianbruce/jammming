import React from "react";
import "../TrackList/TrackList";
import "./PlayList.css";
import { TrackList } from "../TrackList/TrackList";

export class PlayList extends React.Component {
  render() {
    return (
      <div class="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList />
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
