import React from "react";
import "./App.css";
import "../SearchBar/SearchBar";
import "../SearchResults/SearchResults";
import "../PlayList/PlayList";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "song1",
          artist: "artist1",
          album: "album1",
          id: "id1",
        },
        {
          name: "song2",
          artist: "artist2",
          album: "album2",
          id: "id2",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
