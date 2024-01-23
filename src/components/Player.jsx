import { useState } from "react";

function Player({initialName, playerSymbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing((editing) => !editing);

        if(isEditing){
            onChangeName(playerSymbol, playerName);
        }
    }
    const onNameChange = (event) => {
        setPlayerName(event.target.value)
    }
    let playerNameBlock = <span className="player-name">{playerName}</span>

    if(isEditing){
        playerNameBlock = <input type="text" onChange={onNameChange} required value={playerName}></input>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            { playerNameBlock }
            <span className="player-symbol">{playerSymbol}</span>
            <button onClick={onEdit}>{isEditing ? 'Save' : 'Edit'}</button>
          </span>
        </li>
    )
}

export default Player;