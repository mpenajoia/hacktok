import React from 'react';
import JWPlayer from '@jwplayer/jwplayer-react';
import useFetch from '../hooks/useFetch';

function Content() {
    const {playlist, error} = useFetch('wZDkcC5x')

    const playlistMap = playlist?.map((item, key) => {
        return (            
            <JWPlayer 
                key={key}
                library="https://cdn.jwplayer.com/libraries/7vZSn4fo.js"
                playlist={`https://cdn.jwplayer.com/v2/media/${item['mediaid']}`}
                config={{
                    "width": "50%"
                }}
            />            
        )
    })

  return (
    <div className="main-content">
        {playlistMap}
    </div>
  )
}

export default Content