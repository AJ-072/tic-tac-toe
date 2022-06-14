import Board from "./Board";
import '../style/GameStyle.css'
import { useEffect, useState } from "react";

function Game(){
    const [score,setScore] = useState(()=>{
        return {
            X   :   0,
            O   :   0
        }
    })

    const initialState = {
        squares :   Array(9).fill(null),
        XisNext :   true,
        winner  :   null
    }
    const [state,setState] = useState(initialState)

    const handleSquare = (i)=>{
        const squares = state.squares.slice()
        let winner  = state.winner;
        if(squares[i]||winner)
            return;
       
        squares[i] = state.XisNext?'X':'O';
        winner = calculateWinner(squares);
        setState({
            squares :   squares,
            XisNext :   !(state.XisNext),
            winner  :   winner
        })
        if(winner){
            onWin(winner)
            
        }
    }

    useEffect(()=>{
        let winner = state.winner;
        if(winner)
            alert(winner + " wins")
    })

    const onWin = (winner)=>{
        let newScore = score
        if(!winner)
            return;
        if(winner==='X')
            newScore.X++
        else if(winner==='O')
            newScore.O++

        setScore(newScore)
    }

    const restart = ()=>{
        setState(initialState)
    }

    return <div className="game">
        <header className="game-header">
            <div className="game-horizontal-div">
                <div className="game-score">
                    <h1>Score Board</h1>
                    <div className="game-score-value">{"X : "+score.X}</div>
                    <div className="game-score-value">{"O : "+score.O}</div>
                </div>
                <div className="">
                    <h1 className="game-heading">Tic-Tac-Toe</h1>
                    <Board  squares={state.squares} XisNext={state.XisNext} handleSquare={(i)=>handleSquare(i)}/>
                    <div>
                    <button className="bottom-button" onClick={()=>restart()}>Restart</button>
                    </div>
                </div>
                
            </div>
        </header>
    </div>
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i = 0;i<lines.length;i++){
        let [a,b,c] = lines[i]
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])
            return squares[a];
    }
    return null;
}

export default Game;