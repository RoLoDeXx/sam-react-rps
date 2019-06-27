import React from "react";
import "./App.css";
import Header from "./components/Header";
import GameBody from "./components/GameBody";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <GameBody />
      <Footer />
    </div>
  );
}

export default App;
