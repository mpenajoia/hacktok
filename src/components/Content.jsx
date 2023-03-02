import { useContext, useState, useEffect } from 'react';
import JWPlayer from '@jwplayer/jwplayer-react';
import { PlaylistContext } from '../context/PlaylistContext';
import InfiniteScroll from 'react-infinite-scroll-component';

function Content() {
    const { playlist, loading, error, currentPlaylistId } = useContext(PlaylistContext)
    console.log(playlist)
    const [ playlistArray , setPlaylistArray ] = useState(playlist)


    useEffect(()=> {
        setPlaylistArray(playlist)
        console.log(playlistArray)
    },[playlist])

    const playlistMap = playlistArray?.map((item, key) => {
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
    const moreItems = () => {
        setPlaylistArray([...playlistArray, ...playlistArray])
    }

    if(error) return <p>{error.message} using Playlist Id: {currentPlaylistId}</p>
    if(loading) return <p>Loading...</p>

  return (
    <div className="content-wrapper">
        <InfiniteScroll
            dataLength={playlistArray ? playlistArray.length : 10}
            next={moreItems}
            hasMore={true}
        >
        <div className="content-main">
                {playlistMap}
        </div>
        </InfiniteScroll>
    </div>
  )
}

export default Content