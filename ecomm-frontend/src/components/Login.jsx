import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
    const uname = useRef(null);
    const upwd = useRef(null);
    const navigate = useNavigate();
    const login = ()=>{
        uname.current.value == "ExcelR" && upwd.current.value == "ExcelR@123" ? navigate("/dashboard") : navigate("/error");
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN</legend>
                <input type="text" ref={uname} placeholder="enter user name"></input>
                <br></br><br></br>
                <input type="password" ref={upwd} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;