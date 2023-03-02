import React, { useState } from 'react'

function Head() {
    const [playlistId, setPlaylistId] = useState('')
    const handlePlaylistId = (e) => {
        e.preventDefault()
        setPlaylistId(e.target.value)
    }
  return (
    <div className="head">
        <div className='head-content'>
            <form>
                <input type="text" placeholder="Enter playlist ID" value={playlistId} onChange={handlePlaylistId} />
            </form>
        </div>
    </div>
  )
}

export default Head