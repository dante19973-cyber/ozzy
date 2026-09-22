import { useState } from 'react'
import './App.css'
import Heder from "./Heder.jsx";
import Home from "./Home.jsx";
import Life from "./Life.jsx";
import BlackS from "./BlackS.jsx";
import OzzyO from "./OzzyO.jsx";
import AlbumB from "./AlbumB.jsx";
import AlbumO from "./AlbumO.jsx";
function App() {
  const [page, setPage] = useState("home")
  const render=()=>{
      switch (page) {
          case "home":
              return <Home />;
          case "life":
              return <Life />;
          case "blackS" :
              return <BlackS />;
          case "ozzyO" :
              return <OzzyO />;
          case "albumB" :
              return <AlbumB />;
          case "albumO" :
              return <AlbumO />;

      }
  }
  return (
    <>
        <Heder />

        {/* Кожен компонент має свій унікальний id для скролу */}
        <main>
            <section id="home"><Home /></section>
            <section id="life"><Life /></section>
            <section id="blackS"><BlackS /></section>
            <section id="ozzyO"><OzzyO /></section>
            <section id="albumB"><AlbumB /></section>
            <section id="albumO"><AlbumO /></section>
        </main>
    </>
  )
}
export default App
