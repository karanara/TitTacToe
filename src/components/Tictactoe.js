import Board from "./Board";
import { useState } from "react";
const PLAYER_X ="X";
const PLAYER_O="O";
const Tictactoe =()=>{
    const [tiles,setTiles] = useState(Array(9).fill(null));
    const [playerTurn ,setPlayerTurn]=useState(PLAYER_X);
    const handleTileClick=(index)=>{
        if(tiles[index] != null){
            return;
        }
        const newTiles=[...tiles];
        newTiles[index]=playerTurn;
        setTiles(newTiles);
        if(playerTurn===PLAYER_X){
            setPlayerTurn(PLAYER_O);
        }
        if(playerTurn===PLAYER_O){
            setPlayerTurn(PLAYER_X);
        }
    };
    return (
        <div className="flex flex-col items-center bg-gray-900 text-white">
           <h1>Tictactoe</h1>
           <Board tiles={tiles} onTileClick={handleTileClick}/>
        </div>
        
    );
}
export default Tictactoe;