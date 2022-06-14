import Square from "./Square"
import '../style/Board.css'
function Board(props){
    
    const renderSquare = (i)=><Square onClick = {()=>props.handleSquare(i)} value={props.squares[i]}></Square>

    return (<div>
        <div className="status">Next player : {props.XisNext?"X":"O"}
        </div>
        <div className="board-style">
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
        </div>)
}
export default Board