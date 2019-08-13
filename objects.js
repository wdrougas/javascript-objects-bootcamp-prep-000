var playlist = {drake:"miss me", bruce:"dancing in the dark", meek:"chariot"};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist]
  return playlist
}