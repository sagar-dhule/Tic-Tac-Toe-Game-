/* eslint-disable eqeqeq */
import { useState } from "react";
import "./Player.css";

function Player(props) {
  const [playerName, setPlayerName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleClick() {
    if (isEditing) {
      props.setPlayer(playerName); // update
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      props.setPlayer(playerName);
      setIsEditing(false);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        onChange={handleChange}
        value={playerName}
        onKeyDown={handleKey}
      />
    );
  }

  return (
    <div className="Player-container">
      {editablePlayerName}
      <span className="symbol">{props.symbol}</span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}

export default Player;
