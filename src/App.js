import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import ColorCardList from "./components/colorCardList";
import ItemList from "./components/itemList";

function App() {
  return (
    <>
      <NavBar />
      <ColorCardList />
      <ItemList />
    </>
  );
}

export default App;
