const playLists = [
  {
    listName: 'Test name',
    listTracks: [
      {
        id: 1,
        name: 'Bob',
        artist: 'Bob Bob',
        album: 'Bobs album'
      },
      {
        id: 2,
        name: 'Sally',
        artist: 'Sally Sally',
        album: 'Sallys album'
      }
    ]
  },
  {
    listName: 'Another Longer Test name',
    listTracks: [
      {
        id: 1,
        name: 'Jim',
        artist: 'Jim Bob',
        album: 'Jim Bobs album'
      },
      {
        id: 2,
        name: 'Joe',
        artist: 'Joe Sally Sally',
        album: 'Joe Sallys album'
      }
    ]
  }
];
// This rendered object within array of objects correctly, before adding another state of playListTracks array
{
  this.props.playLists.map(list => {
    return (
      <div className="Playlist-saved">
      <h2>{list.listName}</h2>
      {
        list.listTracks.map(track => {
          return (
            <div>
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
              <br/>
            </div>
          )
        })
      }
      </div>
    )
  })
}
