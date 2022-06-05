export default function Condition(props){
    return(
        <p className="condition-text" style={{color:`${props.color}`}}>{props.text}</p>
    )
}