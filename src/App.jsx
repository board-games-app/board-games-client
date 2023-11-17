import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import AddGamePage from "./pages/AddGamePage";
import { useState } from "react";

function App() {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-games/:gameId" element={<GameDetails  />} />
        <Route path="/add-game" element={<AddGamePage />} />
      </Routes>
    </>
  )
}

export default App
