import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import PlayList from '../PlayList/PlayList.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [
        {
        id: "2WOjLF83vqjit2Zh4B69V3",
        name: "Don't Think Twice, It's All Right",
        artist: "Bob Dylan","album":"The Freewheelin' Bob Dylan",
        uri: "spotify:track:2WOjLF83vqjit2Zh4B69V3"
        },
        {
        id: "0u2DOByL0CghKtcvSkQAiQ",
        name: "Don't Think Twice",
        artist: "Hikaru Utada","album":"Don't Think Twice",
        uri: "spotify:track:0u2DOByL0CghKtcvSkQAiQ"
        },
        {
        id: "7IsXXgpowAB48crGjV1oGb",
        name: "Don't Think Twice, It's All Right",
        artist: "Peter, Paul and Mary",
        album: "In The Wind",
        uri: "spotify:track:7IsXXgpowAB48crGjV1oGb"
        }
      ],
      playListName: "App Playlist Name",
      playListTracks: [
        {
          id: "5HnETlAHXPhnX1SM6MJ3LY",
          name: "Don't Think Twice, It's All Right",
          artist: "Imaginary Future",
          album: "Don't Think Twice, It's All Right",
          uri: "spotify:track:5HnETlAHXPhnX1SM6MJ3LY"
        },
        {
          id: "6rPAsWugTohlV1IUrsWNSG",
          name: "Don't Think Twice",
          artist: "Mike Ness",
          album: "Cheating At Solitaire",
          uri: "spotify:track:6rPAsWugTohlV1IUrsWNSG"
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList=this.savePlayList.bind(this);
    this.search=this.search.bind(this);
  }
  addTrack(track) {
    if (this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      let trackArrayAddTrack = this.state.playListTracks.concat(track);
      this.setState({
        playListTracks: trackArrayAddTrack
      });
    }
  }
  removeTrack(track) {
    let removedTrackArray = this.state.playListTracks.filter(tracks => tracks !== track);
    this.setState({
      playListTracks: removedTrackArray
    });
  }
  updatePlaylistName(name) {
    let newName = name;
    this.setState({
      playListName: newName
    });
  }
  savePlayList(){
    let trackURIs = this.state.playListTracks.map(track => {
      return track.uri;
    });
    console.log(trackURIs);
  }
  search(term){
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
        </div>
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <PlayList playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} updatePlaylistName={this.updatePlaylistName} onSave={this.savePlayList}/>
        </div>
      </div>
    );
  }
}

export default App;
