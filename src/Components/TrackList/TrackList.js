import React from "react";
import "../Track/Track";
import "./TrackList.css";
import { Track } from "../Track/Track";

export class TrackList extends React.Component {
  render() {
    return (
      <div class="TrackList">
        <Track />
        <Track />
        <Track />
      </div>
    );
  }
}
