import React,{useState} from "react";
import "./index.css"
import Input from "./Components/Input";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {SignInStart} from "../../redux/actions/Auth"


export default function SignIn(){
    const [inputTextMail,setInputTextMail]=useState("")
    const [inputTextPasword,setInputTextPassword]=useState("")
    const [passwordDisplayType,setPasswordDisplayType]=useState("password")
    const dispatch=useDispatch()

    function handleMailInputChange(val){
        setInputTextMail(val)
    }

    function handlePasswordInputChange(val){
        setInputTextPassword(val)
    }

    function handleLogin(){
        if(inputTextMail!=="" && inputTextPasword!==""){
            const SiginCredentials={
                username:inputTextMail,
                password:inputTextPasword
            }
            dispatch(SignInStart(SiginCredentials))
        }
        if(inputTextPasword===""){
            toast.error("Password can't be empty")
        }
        if(inputTextMail===""){
            toast.error("UserName / MailId can't be empty")
        }
    }

    function handleShowPassword(){
        setPasswordDisplayType((prevState)=>{
            if(prevState==="password"){
                return "text"
                
            }else{
                return "password"  
            }
        })
    }
    return(
        <div className="signIn-signUp-Page-Container">
           <div className="signIn-signUp-Container">
                <h4 className="mb-2">Sign In</h4>
                <Input type="text" onChange={handleMailInputChange} placeholder="username" className="input-element-signIn-signUp" handleSubmit={handleLogin}/>
                <div className="password-container">
                    <Input type={passwordDisplayType} handleSubmit={handleLogin} onChange={handlePasswordInputChange} placeholder="Password" className="input-element-signIn-signUp-password"/>
                    { passwordDisplayType==="text" && <img style={{height:"20px",marginLeft:"4px",cursor:"pointer",backgroundColor:"#e8fofe"}} className="showPassword" onClick={handleShowPassword} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC7klEQVRoge2ZPWjVUBTHf+8pFmvxC50UalWsYBGe2KKDk0LpUFzUR6mTrupUHQpiF+kkCi66OSj40dJFN3EoqE9R7OD2REdR8KMUa2v7jMNJaEhvknOTl75W8oczJNzzP+ef5N57zg3kyJHjv8e+RieQBkPAPHC60YkkwRDguLZsRRRC7ncA74DVvnueiAeG8U1AJ3AEOARsB7a4VgR+uvbB5X0DPAWmUyuIQBmYY+EtOO512TC2A/gaGBtnv4ARoJvwB7nsRXg2ARxf6SIc4DHQmoWIEwYRYRN7L/A5hYhJ4GS9BVwAaoZgWb2Jv8BgvZK/GhMsTMRmYJ1r7UAfsoLNWgi5njb5y8pAYSJM2AWMWogYTpr8WYsgtiIABjB/liY7Y5t8JzBjKSBqYofhkpL3N3BAS7oe+KQknkC/xIZhTBmrCmzQEN5SEs4AO7DbJ0zYjX5i344jO4wsYRqy+z6/tCIeKmPWgK4oonElkQOcCvheM4zRiui3iPuakNqp14LEAdoC/i9CxmlEtFvG7jGRVCxJ1gb8JyPGxq1OLZaxxz3Hoo9kLiKACasC10XjqIWxdwgXEeVrgmO62YPdU9gT8H+l8An7nDZhVzt1mwQUkAmiJekL+J9X+qUtACum5D10od/eg61lE9IuZiliHjgYJQBks9AkMYsUZn5sy1jEzbjkQbbrqjKJUYP/GuAc8BKYQpr558g+kaazqyJljgr7kaZbI2JAS0ryzm4aKFnEAaSE1QioARcteG177C8sXjDUGI5IPGhjSGEWhzakitXOia1Jk/dwIyZxv/1BCrN+5BNoAZqBnchTfER05WlbiqsxiL5KTWuZiegFvi2RiMzOYluBJ0skIrM3AXIMaJqISa2CnIanbU+tUECKqhH0e4bfpoB7wFEfp3VnV69T4WbgGFKnlJDldKNrAN+BH8BH4C1yvP4MOW0IogzcZfHRfgl4X6d8M0dwx77S2HSSwROxIpP3sKJ/MObIkUOBfzMC9vwbymglAAAAAElFTkSuQmCC"/>}
                    { passwordDisplayType==="password" && <img style={{height:"20px",marginLeft:"4px",cursor:"pointer"}} onClick={handleShowPassword} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRIie3UTS6EQRAG4IeFECz87UhIjBOw9rOX4TR+D8A1uMAMbsGCBRuCRMbsSMwBxqJbwjfd841E2HiTSif91ltVqa4u/vHX6Cvhx7GJKuYxE++fcIdatJfvJh7CPlpol1gLe1HTE6Zx0UPgol1hriz4ApoJcQ3LGI62gpOEXxOVXPApPCZEW10K2k34P2Ay5XyWqRwGcIhnNHAQ7+A0oasXg1cTTm2hLWLAIncQudWMdv1zgpuM00jkGwmuEbnRjPYa+lO9+kl8JNjO8IvxPE5wR/Fcymg7hiM1dieRGxB63tD5yN2G4wsmhRErOu9mKiT89qL/PSZygor0RzsVpmUk2lqm8qaws7piGucJcZldYrYs+AcGhdb0suzesBM1HShb12PCJ9wQ2vd5Xd8Kj1nHa6+V/+P38Q7LJqisy2fc2QAAAABJRU5ErkJggg=="/>}
                </div>
                <button className="btn btn-primary mt-2 input-element-signIn-signUp" onClick={handleLogin}>Login</button>
                <h6>Don't have an Account?<a href="/signUp">Sign Up</a></h6>
           </div>
        </div>
    )
}