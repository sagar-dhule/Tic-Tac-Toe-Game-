import "./App.css";
import Player from "./Components/Players";
import Game from "./Components/Game";
import logo from "./Images/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.avif";
import { useState } from "react";

function App() {
  let [player1, setPlayer1] = useState("Player1"); // update

  let [player2, setPlayer2] = useState("Player2"); // updat

  return (
    <div>
      <h1 className="game-Heading">Tic Tac Toe Game</h1>
      <div className="img-container">
        <img src={logo} height="120px" width="150px" alt=""></img>
      </div>

      <div className="main-section">
        <div className="game-container">
          <div className="player-section">
            <Player name="Player1" symbol="X" setPlayer={setPlayer1} />{" "}
            {/* update*/}
            <Player name="Player2" symbol="O" setPlayer={setPlayer2} />{" "}
            {/* update*/}
          </div>

          <div className="game-section">
            <Game player1={player1} player2={player2} /> {/* update*/}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
