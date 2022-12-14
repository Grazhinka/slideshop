import { useState } from 'react';
import {data} from './data'


function Slide(props) {
  const [objectCard]=useState(props.numberGood-1);
  const [arrayPhoto,setArrayPhoto]=useState(0)
  const {image}=data[objectCard]
  const imageSet =image[arrayPhoto]

  const previous=()=>{
    setArrayPhoto((arrayPhoto=>{
        arrayPhoto--;
      if (arrayPhoto<0){
        arrayPhoto=image.length-1
      }
      return arrayPhoto
    }))
  }

  const next=()=>{
    setArrayPhoto((arrayPhoto=>{
        arrayPhoto++;
      if (arrayPhoto>image.length-1){
        arrayPhoto=0
      }
      return arrayPhoto
    }))
  }

  return (
      <div className='centerDiv' >
        <button onClick={previous}><i className="fa-solid fa-chevron-left"></i></button>
        <img src={imageSet} width='300px' height="450px"alt='img'/>
        <button onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
  );
}

export default Slide;










