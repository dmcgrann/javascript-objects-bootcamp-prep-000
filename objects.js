var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle) {
  return ({}, playlist, { 'Phil Ochs': "Here\'s to the State of Mississippi" })
}

function removeFromPlaylsit(playlist, artistName, songTitle) {
  delete playlist.artistName
  return playlist
}
