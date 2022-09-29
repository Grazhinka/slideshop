import { useState } from 'react';
import './App.css';
import {data} from './data'
import Slide from './slide';

function App() {
  const [goods,setGoods]=useState(data)
  
  const removeGood=(id)=>{
    let newGoods=goods.filter(good=>good.id !==id)
    setGoods(newGoods)
  }
  return (
    <div>
      <h1 className='centerDiv'>Бренд одежды "Р&W"</h1>
      <div className='container'>
      {goods.map((good=>{
        const {id,name,description,price}=good
        return(
          <div className='card' key={id}>
            <h2>{name}</h2>
            <Slide numberGood={id}/>
            <p>{description}</p>
            <h2>{price} $</h2>
            <button onClick={()=>removeGood(id)}>Больше не показывать</button>
          </div>
        )
      }))}
      </div>
      <p className='centerDiv colorP'>Вы заинтересованы в {goods.length} товарах нашего бренда</p>
      <div className='centerDiv'><button  onClick={()=>{setGoods([])}}>Удалить всё</button></div>
      
    </div>
  );
}

export default App;

