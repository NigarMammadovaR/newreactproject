import React from 'react';
import { useState, useEffect} from "react";
import  Card from "../components/Card";
import Slider from '../components/Slider';
import BestSellers from "../components/BestSellers";
import CountdownTimer from '../components/CountDown';
import image1 from '../styles/images/discount.jpg.webp';
import image2 from "../styles/images/insta-1.jpg.webp";
import image3 from "../styles/images/insta-2.jpg.webp";
import image4 from "../styles/images/insta-4.jpg.webp";








const Home = () => {

  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = ["women's clothing", "men's clothing", "jewelery", "electronics"];
  const handleCategoryClick = (category) =>{
    setCurrentCategory(category);
  };

  return (

    <div className='home'>
        <div className="leftCard">
          <div className="text">
            <h1>Women's clothing</h1>
            <a href="#">Shop now</a>
          </div>   
      </div>
      <div className="rightCard">
        <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3"></div>
        <div className="card4"></div>
      </div>
      <div className="container">
        <div className="cardTitle">
          <div className='newProduct' >New Product</div>
        <ul className="categoryFilter">
         <li onClick={() => handleCategoryClick("All")}>All</li> 
         {
          categories.map((category)=>(
             <li 
             key={category}
             onClick={() =>handleCategoryClick(category)}>{category}</li>
          ))
         }
       
        </ul>
        </div>

        <div className="cardComponent">
     <Card currentCategory={currentCategory}/>
     
    </div>




      </div>
     <div className="carousel">
    < Slider/>
     </div>
     <section className="hotTrendd"> 
       <div className="container">
        <BestSellers/>
     </div>
      </section>
     <section>
      <div className="container">
        <div className="summer">
          <div className="left">
            <img src={image1} alt="" />
          </div>
          <div className="right">
            <h2>Summer</h2>
            <div className="circle">
              <p>Discount</p>
              <p className='black'>Sale <span className='red'>50%</span></p>
            </div>
            <div className="count">
              <CountdownTimer/>
            </div>
             
          </div>
        </div>
      </div>
     </section>
     <section className='images'>
      <img src={image2} alt="" />
    
      <img src={image3} alt="" />
     
      <img src={image4} alt="" />
     
      <img src={image2} alt="" />
     
      <img src={image3} alt="" />
    
      <img src={image4} alt="" />
      
     </section>
    
           
      
   
    </div>
  )
}

export default Home  ;

