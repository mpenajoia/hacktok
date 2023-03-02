import { useContext } from 'react';
import JWPlayer from '@jwplayer/jwplayer-react';
import { PlaylistContext } from '../context/PlaylistContext';

function Content() {
    const { playlist, loading, error, currentPlaylistId } = useContext(PlaylistContext)

    const playlistMap = playlist?.map((item, key) => {
        return (            
            <JWPlayer 
                key={key}
                library="https://cdn.jwplayer.com/libraries/7vZSn4fo.js"
                playlist={`https://cdn.jwplayer.com/v2/media/${item['mediaid']}`}
                config={{
                    "width": "50%",
                    "autoPause": {
                        "viewability": true,
                    }
                }}
            />            
        )
    })

    if(error) return <p>{error.message} using Playlist Id: {currentPlaylistId}</p>
    if(loading) return <p>Loading...</p>

  return (
    <div className="main-content">
        {playlistMap}
    </div>
  )
}

export default Content