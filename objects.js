var playlist = { artistName: 'songTitle' }

function updatePlaylist(playlist, artistName, songTitle) {
  return ({}, playlist, { 'Phil Ochs': "Here\'s to the State of Mississippi" })
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete { 'Kanye': "Gold Digger" }
  return playlist
}
