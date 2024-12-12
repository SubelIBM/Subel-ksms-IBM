import React, { useRef, useState } from "react";


export default function Ref(){

    let Display = useRef(null);
    let [add,setAdd] = useState([]);

    function HandlerAdd(){
        setAdd( [...add,Display.current.value])
        console.log(add)
        console.log(Display.current.value)
        Display.current.value="";

    }


    return (
        <div>

          <input ref={Display}  type="text"/>
          <button onClick={HandlerAdd} > Add</button>
          <br />
          {add.map((add,idx)=>{

            return <><h3 key={idx}>{add}</h3> 
            <button onClick={()=>add?.idx = ""}>Delete</button></>

          })}
        </div>

    )
}