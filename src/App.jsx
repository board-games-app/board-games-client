import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import AddGamePage from "./pages/AddGamePage";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RandomGame from "./components/RandomGame";


function App() {

  return (
    <>
      <Navbar /> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-games/:gameId" element={<GameDetails  />} />
        <Route path="/add-game" element={<AddGamePage />} />
        <Route path="random-game" element={<RandomGame />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
