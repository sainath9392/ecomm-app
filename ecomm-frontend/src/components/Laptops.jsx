import axios from "axios";
import { useState,useEffect } from "react";
import "./products.css";
const Laptops = ()=>{
    const [laptops,setLaptops] = useState([]);
    const get_laptops = async ()=>{
        const {data} = await axios.get("http://localhost:8000/laptops");
        setLaptops(data);
    }
    useEffect(()=>{
        get_laptops();
    },[]);
    return(
        <>
            <div class="parent">
                {
                    laptops.map((laptop,index)=>{
                        return(<div class="child">
                            <img src={laptop.pimage}></img>
                            <h2>{laptop.pname}</h2>
                            <h3>{laptop.pcost}</h3>
                        </div>)
                    })
                }
            </div>
        </>
    )
}
export default Laptops;