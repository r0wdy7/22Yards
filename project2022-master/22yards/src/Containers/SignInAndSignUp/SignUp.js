import React,{useEffect, useState} from "react";
import "./index.css"
import Input from "./Components/Input";
import { useDispatch } from "react-redux";
import { SignUpStart } from "../../redux/actions/Auth";
import { toast } from "react-toastify";
import Condition from "./Components/condition";

export default function SignUp(){
    const [inputTextMail1,setInputTextMail1]=useState("")
    const [inputTextPasword1,setInputTextPassword1]=useState("")
    const [inputTextUserName,setInputTextUserName]=useState("")
    const [inputTextRePasword,setInputTextRePassword]=useState("")
    const [passwordDisplayType,setPasswordDisplayType]=useState("password")
    const [rePasswordDisplayType,setRePasswordDisplayType]=useState("password")
    const [styleOfRePassword,setStyleOfRePassword]=useState({})
    const [showRepasswordError,setRePasswordError]=useState(false)
    const [showpasswordError,setPasswordError]=useState(false)
    const [colorOfPasswordCondition,setColorOfPasswordCondition]=useState("red")
    const [colorOfMinCharacters,setColorOfMinCharacters]=useState("red")
    const [doUserNameContainSpace,setUserNameContainSpace]=useState(false)
    
    const dispatch=useDispatch()
    useEffect(()=>{
        if(colorOfMinCharacters==="green")
        {
            setColorOfPasswordCondition("green")
        }
        else{
            setColorOfPasswordCondition("red")
        }
    })
    //re password value change
    useEffect(()=>{
        if(inputTextPasword1===inputTextRePasword && inputTextPasword1!==""){
            setStyleOfRePassword({borderColor:"green"})
        }
        if(inputTextPasword1!==inputTextRePasword && inputTextPasword1!==""){
            setStyleOfRePassword({borderColor:"red"})
        }
    },[inputTextRePasword])
    //password value change
    useEffect(()=>{
        if(inputTextPasword1.length===6){
            setColorOfMinCharacters("green")
        }
        if(inputTextPasword1.length<6){
            setColorOfMinCharacters("red")
        }
    },[inputTextPasword1])
    
    //UserName input Change
    function handleUserNameInputChange(val){
        setInputTextUserName(val)
        // console.log(val.includes(" "))
        if(val.includes(" ")){
            setUserNameContainSpace(true)
        }else{
            setUserNameContainSpace(false)
        }
    }
    //email Input Change
    function handleMailInputChange1(val){
        setInputTextMail1(val)
    }
    //Password Input Change
    function handlePasswordInputChange1(val){
        setInputTextPassword1(val)
    }
    //Re Password Input Change
    function handleRePasswordInputChange(val){
        setInputTextRePassword(val)
    }
    //Sumbit
    function handleSignUp(){
        setPasswordError(false)
        if(inputTextPasword1===inputTextRePasword && inputTextMail1!=="" && inputTextUserName!=="" && colorOfPasswordCondition==="green" && !doUserNameContainSpace){
            const SignUpCredentials={
                email_id:inputTextMail1,
                username:inputTextUserName,
                password:inputTextPasword1,
            }
            dispatch(SignUpStart(SignUpCredentials))
        }
        if(inputTextPasword1!==inputTextRePasword){
            toast.error("Re-entered Passowrd Didn't Match Password")
        }
        if(inputTextMail1===""){
            toast.error("Mail Id can't be empty")
        }
        if(inputTextUserName===""){
            toast.error("UserName can't be empty")
        }
        if(inputTextPasword1===""){
            toast.error("Password can't be empty")
        }
        if(colorOfPasswordCondition!=="green"){
            toast.error("Please Try A New Password")
        }
        if(doUserNameContainSpace){
            toast.error("UserName shouldn't contain spaces")
        }
    }
    //show passowrd or not 
    function handleShowPassword(){
        setPasswordDisplayType((prevState)=>{
            if(prevState==="password"){
                return "text"
                
            }else{
                return "password"  
            }
        })
    }
    //show re-passowrd or not 
    function handleShowRePassword(){
        setRePasswordDisplayType((prevState)=>{
            if(prevState==="password"){
                return "text"
                
            }else{
                return "password"  
            }
        })
        
    }
    //on re passowrd input focus
    function handleOnFocusRePassword(){
        if(inputTextPasword1!==inputTextRePasword || inputTextPasword1===""){
            setStyleOfRePassword({borderColor:"red"})
        } 
        setRePasswordError(true)
    }
     //on re passowrd input blur
    function handleOnFocusOutRePassword(){
        if(inputTextPasword1===inputTextRePasword && inputTextPasword1!==""){
            setStyleOfRePassword({})
            setRePasswordError(false)
        } 
        if(inputTextPasword1===""){
            setStyleOfRePassword({})
            setRePasswordError(false)
        }
    }
    //on passowrd input focus
    function handleOnFocusPassword(){
        setPasswordError(true)
    }
    //on passowrd input blur
    function handleOnFocusOutPassword(){
        setPasswordError(false)
    }

    return(
        <div className="signIn-signUp-Page-Container">
            <div className="signIn-signUp-Container" style={{height:"450px"}}>
                    <h4 className="mb-2">Sign Up</h4>
                    <Input 
                       type="text" 
                       onChange={handleUserNameInputChange} 
                       placeholder="username"
                       handleSubmit={handleSignUp}
                       className="input-element-signIn-signUp"/>
                    {doUserNameContainSpace && <Condition text="username shouldn't contain space" color="red"/>}
                    <Input 
                        type="text" 
                        onChange={handleMailInputChange1} 
                        placeholder="Mail Id"
                        handleSubmit={handleSignUp}
                        className="input-element-signIn-signUp"/>
                    <div className="password-container mb-2">
                       <Input 
                         type={passwordDisplayType} 
                         onChange={handlePasswordInputChange1} 
                         placeholder="password"
                         handleSubmit={handleSignUp}
                         onFocus={handleOnFocusPassword}
                         onFocusOut={handleOnFocusOutPassword}
                         className="input-element-signIn-signUp-password"
                         />
                       { passwordDisplayType==="text" && <img style={{height:"20px",marginLeft:"4px",cursor:"pointer"}} onClick={handleShowPassword} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC7klEQVRoge2ZPWjVUBTHf+8pFmvxC50UalWsYBGe2KKDk0LpUFzUR6mTrupUHQpiF+kkCi66OSj40dJFN3EoqE9R7OD2REdR8KMUa2v7jMNJaEhvknOTl75W8oczJNzzP+ef5N57zg3kyJHjv8e+RieQBkPAPHC60YkkwRDguLZsRRRC7ncA74DVvnueiAeG8U1AJ3AEOARsB7a4VgR+uvbB5X0DPAWmUyuIQBmYY+EtOO512TC2A/gaGBtnv4ARoJvwB7nsRXg2ARxf6SIc4DHQmoWIEwYRYRN7L/A5hYhJ4GS9BVwAaoZgWb2Jv8BgvZK/GhMsTMRmYJ1r7UAfsoLNWgi5njb5y8pAYSJM2AWMWogYTpr8WYsgtiIABjB/liY7Y5t8JzBjKSBqYofhkpL3N3BAS7oe+KQknkC/xIZhTBmrCmzQEN5SEs4AO7DbJ0zYjX5i344jO4wsYRqy+z6/tCIeKmPWgK4oonElkQOcCvheM4zRiui3iPuakNqp14LEAdoC/i9CxmlEtFvG7jGRVCxJ1gb8JyPGxq1OLZaxxz3Hoo9kLiKACasC10XjqIWxdwgXEeVrgmO62YPdU9gT8H+l8An7nDZhVzt1mwQUkAmiJekL+J9X+qUtACum5D10od/eg61lE9IuZiliHjgYJQBks9AkMYsUZn5sy1jEzbjkQbbrqjKJUYP/GuAc8BKYQpr558g+kaazqyJljgr7kaZbI2JAS0ryzm4aKFnEAaSE1QioARcteG177C8sXjDUGI5IPGhjSGEWhzakitXOia1Jk/dwIyZxv/1BCrN+5BNoAZqBnchTfER05WlbiqsxiL5KTWuZiegFvi2RiMzOYluBJ0skIrM3AXIMaJqISa2CnIanbU+tUECKqhH0e4bfpoB7wFEfp3VnV69T4WbgGFKnlJDldKNrAN+BH8BH4C1yvP4MOW0IogzcZfHRfgl4X6d8M0dwx77S2HSSwROxIpP3sKJ/MObIkUOBfzMC9vwbymglAAAAAElFTkSuQmCC"/>}
                       { passwordDisplayType==="password" && <img style={{height:"20px",marginLeft:"4px",cursor:"pointer"}} onClick={handleShowPassword} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRIie3UTS6EQRAG4IeFECz87UhIjBOw9rOX4TR+D8A1uMAMbsGCBRuCRMbsSMwBxqJbwjfd841E2HiTSif91ltVqa4u/vHX6Cvhx7GJKuYxE++fcIdatJfvJh7CPlpol1gLe1HTE6Zx0UPgol1hriz4ApoJcQ3LGI62gpOEXxOVXPApPCZEW10K2k34P2Ay5XyWqRwGcIhnNHAQ7+A0oasXg1cTTm2hLWLAIncQudWMdv1zgpuM00jkGwmuEbnRjPYa+lO9+kl8JNjO8IvxPE5wR/Fcymg7hiM1dieRGxB63tD5yN2G4wsmhRErOu9mKiT89qL/PSZygor0RzsVpmUk2lqm8qaws7piGucJcZldYrYs+AcGhdb0suzesBM1HShb12PCJ9wQ2vd5Xd8Kj1nHa6+V/+P38Q7LJqisy2fc2QAAAABJRU5ErkJggg=="/>}
                    </div>
                    <div className="d-flex flex-column" style={{width:"100%"}}>
                        {showpasswordError && 
                        <>
                          <Condition text="Choose a strong Passowrd" color={colorOfPasswordCondition}/>
                          <ul style={{listStyleType:"none"}}>
                              <li><Condition text="Minimum 6 Characters" color={colorOfMinCharacters}/></li>
                          </ul>
                        </>
                        }
                    </div>
                    <div className="password-container" style={styleOfRePassword}>
                       <Input 
                           type={rePasswordDisplayType} 
                           onChange={handleRePasswordInputChange} 
                           placeholder="re-enter password"
                           handleSubmit={handleSignUp}
                           onFocus={handleOnFocusRePassword}
                           onFocusOut={handleOnFocusOutRePassword}
                           style={styleOfRePassword}
                           className="input-element-signIn-signUp-password"/>
                       { rePasswordDisplayType==="text" && <img style={{height:"20px",marginLeft:"4px",cursor:"pointer"}} onClick={handleShowRePassword} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC7klEQVRoge2ZPWjVUBTHf+8pFmvxC50UalWsYBGe2KKDk0LpUFzUR6mTrupUHQpiF+kkCi66OSj40dJFN3EoqE9R7OD2REdR8KMUa2v7jMNJaEhvknOTl75W8oczJNzzP+ef5N57zg3kyJHjv8e+RieQBkPAPHC60YkkwRDguLZsRRRC7ncA74DVvnueiAeG8U1AJ3AEOARsB7a4VgR+uvbB5X0DPAWmUyuIQBmYY+EtOO512TC2A/gaGBtnv4ARoJvwB7nsRXg2ARxf6SIc4DHQmoWIEwYRYRN7L/A5hYhJ4GS9BVwAaoZgWb2Jv8BgvZK/GhMsTMRmYJ1r7UAfsoLNWgi5njb5y8pAYSJM2AWMWogYTpr8WYsgtiIABjB/liY7Y5t8JzBjKSBqYofhkpL3N3BAS7oe+KQknkC/xIZhTBmrCmzQEN5SEs4AO7DbJ0zYjX5i344jO4wsYRqy+z6/tCIeKmPWgK4oonElkQOcCvheM4zRiui3iPuakNqp14LEAdoC/i9CxmlEtFvG7jGRVCxJ1gb8JyPGxq1OLZaxxz3Hoo9kLiKACasC10XjqIWxdwgXEeVrgmO62YPdU9gT8H+l8An7nDZhVzt1mwQUkAmiJekL+J9X+qUtACum5D10od/eg61lE9IuZiliHjgYJQBks9AkMYsUZn5sy1jEzbjkQbbrqjKJUYP/GuAc8BKYQpr558g+kaazqyJljgr7kaZbI2JAS0ryzm4aKFnEAaSE1QioARcteG177C8sXjDUGI5IPGhjSGEWhzakitXOia1Jk/dwIyZxv/1BCrN+5BNoAZqBnchTfER05WlbiqsxiL5KTWuZiegFvi2RiMzOYluBJ0skIrM3AXIMaJqISa2CnIanbU+tUECKqhH0e4bfpoB7wFEfp3VnV69T4WbgGFKnlJDldKNrAN+BH8BH4C1yvP4MOW0IogzcZfHRfgl4X6d8M0dwx77S2HSSwROxIpP3sKJ/MObIkUOBfzMC9vwbymglAAAAAElFTkSuQmCC"/>}
                       { rePasswordDisplayType==="password" && <img style={{height:"20px",marginLeft:"4px",cursor:"pointer"}} onClick={handleShowRePassword} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRIie3UTS6EQRAG4IeFECz87UhIjBOw9rOX4TR+D8A1uMAMbsGCBRuCRMbsSMwBxqJbwjfd841E2HiTSif91ltVqa4u/vHX6Cvhx7GJKuYxE++fcIdatJfvJh7CPlpol1gLe1HTE6Zx0UPgol1hriz4ApoJcQ3LGI62gpOEXxOVXPApPCZEW10K2k34P2Ay5XyWqRwGcIhnNHAQ7+A0oasXg1cTTm2hLWLAIncQudWMdv1zgpuM00jkGwmuEbnRjPYa+lO9+kl8JNjO8IvxPE5wR/Fcymg7hiM1dieRGxB63tD5yN2G4wsmhRErOu9mKiT89qL/PSZygor0RzsVpmUk2lqm8qaws7piGucJcZldYrYs+AcGhdb0suzesBM1HShb12PCJ9wQ2vd5Xd8Kj1nHa6+V/+P38Q7LJqisy2fc2QAAAABJRU5ErkJggg=="/>}
                    </div>
                    <div className="d-flex justify-content-start" style={{width:"100%"}}>
                       { (showRepasswordError && styleOfRePassword!=={} )&& 
                       <>
                         <Condition text="Password and Re Passowrd Must be Same" color={styleOfRePassword.borderColor}/> 
                       </>}
                    </div>
                    <input type="submit" className="btn btn-primary mt-2 input-element-signIn-signUp" onClick={handleSignUp} value="SignUp"/>
                
                <h6>Already Have an Account?<a href="/signIn">Sign In</a></h6>
            </div>
     </div>
    )
}