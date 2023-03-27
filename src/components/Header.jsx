import React from 'react';
import {Link} from "react-router-dom";
import { useState, useEffect , useRef} from "react";
import Svg, { Path } from "react-native-svg";
import image from '../styles/images/logo.png';
import MobileMenu from './MobileMenu';
// import createSvgIcon from 'mui/icons-material/utils/createSvgIcon';



const Header = () => {

const [isOpen, setIsOpen] = useState(false);

function openClose() {
    setIsOpen((isOpen) => !isOpen);
}

let menuRef = useRef();


useEffect(() =>{
    let handler = (e) =>{
       if(!menuRef.current.contains(e.target)) {
        setIsOpen(false);
       }
        
    };
    document.addEventListener ("mousedown",handler);
     
    return () =>{
    document.removeEventListener ("mousedown",handler);
   }

});

  return (
  
    <div className='header' ref={menuRef}>
        <div className="logo">
            <a>
            <img src={image} alt="logo"/>
            </a>
            </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
               
                <li><Link to="/women">Women's</Link></li>
              
                <li><Link to="/men">Men's</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li>
                    <Link className="pages" to="/pages">Pages
                     <div className="dropdown-content">
                     <ul>
                     <li>Product Details</li>
                     <li>Shop Card</li>
                     <li>Checkout</li>
                     <li>Blog Details</li>
                     </ul>
                    </div>
                    
                    </Link>
                   
                </li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="register">
            <ul>
                <li><Link to="/login">Login / Register</Link></li>
                <li>
                    <Link to="/search">
                    <Svg
      viewBox="0 0 1024 1024"
      fill="black"
      height="22px"
      width="30px"
      rotation={90}
     
    >
      <Path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
    </Svg>
                    </Link>
                </li>
                <li>
                <Svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="22px"
      width="30px"
      
    >
      <Path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
    </Svg>
                </li>
                <li>
                <Svg
      viewBox="0 0 64 64"
      fill="black"
      height="20px"
      width="30px"
     
    >
      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M44 18h10v45H10V18h10zM41 42H23"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"
      />
    </Svg>
                </li>
            </ul>
        </div>
        
        <div className='bar'>
        <Svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em" 
      onClick={openClose}>
       
      <Path
        fillRule="evenodd"
        d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
 />
    </Svg>
    
        {isOpen && <MobileMenu />}
        </div>

    </div>
    
   

  )
}

export default Header;