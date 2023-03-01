import JWPlayer from '@jwplayer/jwplayer-react';
import { Head, Content, Sidebar } from "./components/index";

function App() {


  return (
    <div className="App">
      <Head />
      <Sidebar/>
      <Content />
      <JWPlayer 
        library="https://cdn.jwplayer.com/libraries/7vZSn4fo.js"
        playlist="https://cdn.jwplayer.com/v2/playlists/wZDkcC5x"
        config={{
          "width": "50%"
        }}
      />
    </div>
  );
}

export default App;
