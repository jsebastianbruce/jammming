import React from "react";
import "./App.css";
import "../SearchBar/SearchBar";
import "../SearchResults/SearchResults";
import "../PlayList/PlayList";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
