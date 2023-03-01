import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [playlist, setPlaylist] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        
    },[])

  return { playlist, loading, error }
}

export default useFetch