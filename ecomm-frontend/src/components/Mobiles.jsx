import axios from "axios";
import { useState,useEffect } from "react";
import "./products.css";
const Mobiles = ()=>{
    const [mobiles,setMobiles] = useState([]);
    const get_mobiles = async ()=>{
        const {data} = await axios.get("http://localhost:8000/mobiles");
        setMobiles(data);
    }
    useEffect(()=>{
        get_mobiles();
    },[]);
    return(
        <>
            <div class="parent">
                {
                    mobiles.map((mobile,index)=>{
                        return(<div class="child">
                            <img src={mobile.pimage}></img>
                            <h2>{mobile.pname}</h2>
                            <h3>{mobile.pcost}</h3>
                        </div>)
                    })
                }
            </div>
        </>
    )
}
export default Mobiles;