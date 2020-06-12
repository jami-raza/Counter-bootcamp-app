import React, {useState} from 'react';
import {Message} from './Message.js';
import {Breakfast} from './Breakfast';
import './App.css';


export default function App() {
  let [count, setcount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  let [isbreakfast, setbreakfast] = useState(true);
  return (
    <div className={`box ${isMorning ? 'daylight' : 'Night'}`}>
      <div className={` ${isbreakfast ? 'Tea' : 'coffee'}`}>
      <h2>Have {isbreakfast ? 'Tea' : 'Coffee' }</h2>
      
      <Breakfast Dishes = {"Breakfast is Good for health"}/>
      </div>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />
      <br />
      <div className={"button1"} onClick={()=> setcount(count + 1 )}><b>Update Counter</b></div>
        <div className={"button"}onMouseOver={(Night)=>setMorning(!isMorning)}><b>Update day</b></div>
        <div className={"button2"} onClick={()=>setbreakfast(!isbreakfast)} ><b>BreakFast</b></div>    
    </div>
  );
}
