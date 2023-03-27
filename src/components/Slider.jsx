
import { useState } from 'react';

const Slider = () => {

    const words=[
        {id:0, value:"The Chloe Collection", },
        {id:1, value:"The project jacket"},
        {id:2, value:"Shop now"}
    ];



    const [wordData, setWordData] = useState(words[0].value);
   

    const handleClick = (index) =>{
        const wordSlider = words[index].value;
        setWordData(wordSlider);

       
    };



  return (
    <>
        <div className="slider">
            <div>{wordData}</div>
           <div className="flex_row">
            {words.map((id,i)=>
            <button key={i} 
            className={`dot ${id  === i ? "active" : ""}`}
            onClick={() => handleClick(i)}>
            </button>
           
            )}
           </div>
        </div>
       

    </>
  )
}

export default Slider;

