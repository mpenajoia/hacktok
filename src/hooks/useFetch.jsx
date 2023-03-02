import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(playlistId) {
    const [playlist, setPlaylist] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        axios.get(`https://cdn.jwplayer.com/v2/playlists/${playlistId}`)
        .then(response => setPlaylist(response.data.playlist))
        .catch((e) => setError(e))
    },[playlistId])

  return { playlist, error }
}

export default useFetch