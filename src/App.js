import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import ColorCardList from "./components/colorCardList";

function App() {
  return (
    <>
      <NavBar />
      <ColorCardList />
    </>
  );
}

export default App;
