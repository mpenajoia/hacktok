import { Head, Content, Sidebar } from "./components/index";
import { PlaylistContext } from "./context/PlaylistContext";
import { useState } from 'react';
import useFetch from "./hooks/useFetch";


function App() {
  const [currentPlaylistId, setCurrentPlaylistId] = useState("lDF3B0qj")
  const { playlist, loading, error } = useFetch(currentPlaylistId)

  return (
    <PlaylistContext.Provider value={{ playlist, loading, error, currentPlaylistId, setCurrentPlaylistId }}>
      <div className="App">
        <Head />
        <div className="main">
          <Sidebar/>
          <Content />
        </div>
      </div>
    </PlaylistContext.Provider>
  );
}

export default App;
