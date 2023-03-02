import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(playlistId) {
    const [playlist, setPlaylist] = useState(null)
    console.log('in useFetch playist is: ', playlist)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
      setLoading(true)
      axios.get(`https://cdn.jwplayer.com/v2/playlists/${playlistId}`)
      .then(response => setPlaylist(response.data.playlist))
      .catch((e) => setError(e))
      .finally(setLoading(false))
    },[playlistId])
  return { playlist, setPlaylist, error, loading }
}

export default useFetch