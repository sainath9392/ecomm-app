import axios from "axios";
import { useState,useEffect } from "react";
import "./products.css";
const Headphones = ()=>{
    const [headphones,setHeadphones] = useState([]);
    const get_headphones = async ()=>{
        const {data} = await axios.get("http://localhost:8000/headphones");
        setHeadphones(data);
    }
    useEffect(()=>{
        get_headphones();
    },[]);
    return(
        <>
            <div class="parent">
                {
                    headphones.map((headphone,index)=>{
                        return(<div class="child">
                            <img src={headphone.pimage}></img>
                            <h2>{headphone.pname}</h2>
                            <h3>{headphone.pcost}</h3>
                        </div>)
                    })
                }
            </div>
        </>
    )
}
export default Headphones;