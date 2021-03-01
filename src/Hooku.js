import React,{useState,useEffect} from 'react';
function Hooku(){
    const [count,setCount]=useState(100);
    useEffect(()=>{
        console.log(count);
    },[count==95]);
    return (<div>
        <h1>Hooks example {count}</h1>
        <button onClick={()=>{setCount(count-1)}}>click here</button>
    </div>);
}
export default Hooku;