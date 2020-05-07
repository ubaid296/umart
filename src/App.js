import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import ColorCardList from "./components/colorCardList";
import ItemList from "./components/itemList";
import Header from "./components/header";

function App() {
  return (
    <div className="body">
      <NavBar />
      <Header />
      <ColorCardList />
      <ItemList />
    </div>
  );
}

export default App;
