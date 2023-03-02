import { useState, useContext } from 'react'
import jwlogo from '../img/jwlogo.png'
import { PlaylistContext } from '../context/PlaylistContext'

function Head() {
    const { setCurrentPlaylistId } = useContext(PlaylistContext)
    const [playlistId, setPlaylistId] = useState('')
    const handlePlaylistId = (e) => {
        e.preventDefault()
        setPlaylistId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setCurrentPlaylistId(playlistId)
        setPlaylistId('')
    }
  return (
    <div className="head">
        <div className='head-content'>
            <img src={jwlogo} alt="JWP Logo" />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter playlist ID" value={playlistId} onChange={handlePlaylistId} />
            </form>
        </div>
    </div>
  )
}

export default Head