import axios from "axios";
import { useState,useEffect } from "react";
import "./products.css";
import { useNavigate } from "react-router-dom";
const Headphones = ()=>{
    const navigate = useNavigate();
    const [headphones,setHeadphones] = useState([]);
    const get_headphones = async ()=>{
        const {data} = await axios.get("http://localhost:8000/headphones");
        setHeadphones(data);
    }
    useEffect(()=>{
        get_headphones();
    },[]);
    const details_product = (product) => {
        navigate('/detailed', {state:product})
    }
    return(
        <>
            <div className="products-container">
                {
                    headphones.map((headphone,index)=>{
                        return(<div  className="product-card" onClick={()=>details_product(headphone)} key={index}>
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
