import React from 'react';
import { useState, useEffect , useRef} from "react";
import { Get } from '../services/fetchservices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";


import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {faUpRightAndDownLeftFromCenter} from "@fortawesome/free-solid-svg-icons";


const Card = ({currentCategory}) => {
const [data, setData] = useState([]);
const filteredData = currentCategory === "All" ? data : data.filter ((d) => d.category === currentCategory);
useEffect (() =>{
    Get("https://fakestoreapi.com/products")
    .then((res)=>{
        setData(res.data);
        console.log(res.data);
    
    });
},[]);

  return (
    <>
    
      {
         filteredData.map((d) =>(
    
          <figure key={d.id}>
        <img src={d.image} alt={d.title}/>
        <div className="hide">
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faBagShopping} />
        </div>
        <p>{d.category}</p>
        <figcaption>{d.title.slice(0,25)}</figcaption>
        <span>{d.price} $</span>
        
        </figure>
))
    }
   </>
  )
}

export default Card;


