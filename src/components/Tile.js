const Tile=({className,value,onClick})=>{
    return(
        <div onClick={onClick} className={`tile -mr-4 -mt-4 text-2xl flex justify-center items-center ${className}`}>
            <h1>{value}</h1>
        </div>
    );
}
export default Tile;