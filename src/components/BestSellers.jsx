import React from 'react';
import image1 from "../styles/images/ht-1.jpg.webp";
import image2 from "../styles/images/ht-2.jpg.webp";
import image3 from "../styles/images/ht-3.jpg.webp";


const BestSellers = () => {

  

  return (
    <>
    <div className="cards">
    <div className="hotTrend">
        <h2>HOT TREND</h2>
        <figure>
            <img src={image1} alt="" />
            <div className="title">
                <figcaption>Chain bucket bag</figcaption>
            <span>$ 59.0</span>
            </div>
            
        </figure>
        <figure>
            <img src={image2} alt="" />
            <div className="title">
            <figcaption>Cotton T-Shirt</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
        <figure>
            <img src={image3} alt="" />
            <div className="title">
            <figcaption>Pendant earrings</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
    </div>
    <div className="bestSeller">
    <h2>BEST SELLER</h2>
    <figure>
            <img src={image1} alt="" />
            <div className="title">
            <figcaption>Pendant earrings</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
        <figure>
            <img src={image2} alt="" />
            <div className="title">
            <figcaption>Pendant earrings</figcaption>
            <span>$ 59.0</span>
           </div>
        </figure>
        <figure>
            <img src={image3} alt="" />
            <div className="title">
            <figcaption>Cotton T-Shirt</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
    </div>
    <div className="feature">
    <h2>FEATURE</h2>
    <figure>
            <img src={image1} alt="" />
            <div className="title">
            <figcaption>Chain bucket bag</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
        <figure>
            <img src={image2} alt="" />
            <div className="title">
            <figcaption>Pendant earrings</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
        <figure>
            <img src={image3} alt="" />
            <div className="title">
            <figcaption>Cotton T-Shirt</figcaption>
            <span>$ 59.0</span>
            </div>
        </figure>
    </div>
    </div>
   
    </>
  )
}

export default BestSellers;