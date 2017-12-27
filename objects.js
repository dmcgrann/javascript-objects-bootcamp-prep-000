var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle) {
  return ({}, playlist, { 'Phil Ochs': "Here\'s to the State of Mississippi" })
}

function removeFromPlaylist(playlist, artistName) {
  delete (playlist, { Kayne: 'Gold Digger' })
  return playlist
}
