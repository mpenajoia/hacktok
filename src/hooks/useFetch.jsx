import React, { useEffect, useState } from 'react'

function useFetch(playlistId) {
    const [playlist, setPlaylist] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> {
        axios.get(`https://cdn.jwplayer.com/v2/playlists/${playlistId}`)
        .then((response) => {
            console.log(response.data)
            setPlaylist(response.data)
        })
        .catch((e) => setError(e))
    },[url])

  return { playlist, error }
}

export default useFetch