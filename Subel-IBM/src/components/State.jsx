import React, { useState } from "react";
import "./State.css";

export default function State() {
  let [count, setCount] = useState(0);
  let [text,setText] = useState("");
  let [tick,setTick] = useState(false);
  let [counter,setCounter] = useState(0);

  return (
    <div>
      <h2 className={count>0? "Green" : "Red"}>Counter: {count}</h2>
      <button onClick={() => setCount((count -= 1))}>Reduce</button>
      <button onClick={() => setCount((count += 1))}>Increase</button>
      <br />


      <h3>You typed: {text} </h3>
      <input type="text" onChange={(e)=> setText(e.target.value)}  value={text}/>
      <button onClick={() => setText("")}>reset</button>
      <br />

      <h3> {tick? "You liked me! ":" You didn't like me. "} </h3>
      <input type="checkbox" onClick={() => setTick(!tick)} />
      <br />

      <input type="radio" name ="Count" onClick={()=> setTick(tick = false)}/>  <label htmlFor=""> Increment</label>
      <input type="radio" name ="Count" onClick={()=> setTick(tick = true)} /> <label htmlFor=""> Decrement</label>
      <h2>{counter}</h2>
      <button onClick={() => tick? setCounter((counter -= 1)):setCounter((counter += 1))}>Click</button>

      
    </div>
  );
}
