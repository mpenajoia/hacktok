import React, { useState } from 'react'
import jwlogo from '../img/jwlogo.png'

function Head() {
    const [playlistId, setPlaylistId] = useState('')
    const handlePlaylistId = (e) => {
        e.preventDefault()
        setPlaylistId(e.target.value)
    }
  return (
    <div className="head">
        <div className='head-content'>
            <img src={jwlogo} alt="JWP Logo" />
            <form>
                <input type="text" placeholder="Enter playlist ID" value={playlistId} onChange={handlePlaylistId} />
            </form>
        </div>
    </div>
  )
}

export default Head