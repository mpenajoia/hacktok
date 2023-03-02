import { Head, Content, Sidebar } from "./components/index";

function App() {


  return (
    <div className="App">
      <Head />
      <div className="main">
        <Sidebar/>
        <Content />

      </div>
    </div>
  );
}

export default App;
