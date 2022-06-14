import '../style/Square.css'

function Square(props){
    //return <button className="square" onClick={()=>props.onClick()}>{props.value}</button>
    return <input type="submit" className="square" onClick={()=>props.onClick()}value = {props.value??" "}/>
}

export default Square