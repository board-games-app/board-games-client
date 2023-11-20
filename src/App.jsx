import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import HomePage from "./pages/HomePage";
import GameDetails from "./pages/GameDetails";
import AddGamePage from "./pages/AddGamePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RandomGame from "./components/RandomGame";
import AbstractStrategy from "./components/AbstractStrategy";
import MixedGenre from "./components/MixedGenre";
import Party from "./components/Party";
import Strategy from "./components/Strategy";
import Word from "./components/Word";

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
        <Route path="/AbstractStrategy" element={<AbstractStrategy />} />
        <Route path="/MixedGenre" element={<MixedGenre />} />
        <Route path="/Party" element={<Party/>} />
        <Route path="/Strategy" element={<Strategy/>} />
        <Route path="/Word" element={<Word/>} />
        <Route path="/AbstractStrategy/game-details/:gameId" element={<GameDetails />} />
        <Route path="/MixedGenre/game-details/:gameId" element={<GameDetails />} />
        <Route path="/Party/game-details/:gameId" element={<GameDetails />} />
        <Route path="/Strategy/game-details/:gameId" element={<GameDetails />} />
        <Route path="/Word/game-details/:gameId" element={<GameDetails />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
