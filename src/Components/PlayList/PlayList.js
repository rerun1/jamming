import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList.js';

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRemoval: true };
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(element){
    let name = element.target.value;
    this.props.updatePlaylistName(name);
  }

  render() {

    return (
      <div className="Playlist">
        <input defaultValue="New Playlist Name" onChange={this.handleNameChange}/>
        <TrackList tracks= {this.props.playListTracks} isRemoval={this.state.isRemoval} onRemove={this.props.onRemove} />
        <button className="Playlist-save-button" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
export default PlayList;
