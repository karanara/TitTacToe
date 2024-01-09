import Tile from "./Tile";
import Strike from "./Strike";
const Board=({tiles,onTileClick})=>{
    return(
        <div className="board ">
            <h1>Board</h1>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 cursor-pointer relative p-8">
            <Tile onClick={()=>onTileClick(0)} value={tiles[0]} className=" border-r border-b border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(1)} value={tiles[1]} className=" border-r border-b border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(2)} value={tiles[2]} className="  border-b border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(3)} value={tiles[3]} className=" border-r border-b border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(4)} value={tiles[4]} className=" border-r border-b border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(5)} value={tiles[5]} className="  border-b border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(6)} value={tiles[6]} className="border-r  border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(7)} value={tiles[7]} className=" border-r  border-blue-500 p-4"/>
            <Tile onClick={()=>onTileClick(8)} value={tiles[8]}/>
            <Strike/>
            </div>
        
        </div>
        
    );
}
export default Board;