function Input(props){
    function handleInputOnChange(event){
        props.onChange(event.target.value)
    }
    function handleFocusIn(){
        if(props.onFocus){
        props.onFocus()
        }
    }
    function handleFocusout(){
        if(props.onFocusOut){
            props.onFocusOut()
        }
    }
    function handleKeyPress(e){
        if(e.key==="Enter"){
            props.handleSubmit()
        }
    }

    return(
        <input 
            className={props.className}
            type={props.type} 
            onChange={handleInputOnChange} 
            placeholder={props.placeholder}
            onFocus={handleFocusIn}
            onBlur={handleFocusout}         
            style={props.style}
            onKeyPress={handleKeyPress}
            //style={{borderColor:"yellow"}}   
        />
    )
}

export default Input