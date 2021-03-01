import React from 'react';

export default function Eventf(){

    /*function clickme(){
        alert('You clicked me');
    }*/
    const clickme=()=>{
        alert('click me again');
    }
    return (
        <div>
            <button onClick={clickme}>functional click</button>
        </div>
    )
}