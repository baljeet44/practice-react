import React from 'react';

function About(prop){
    const red=()=>{
        alert('functional Component');
    }
    return <div>About Us - <h1 onClick={red}>{prop.text}&nbsp;{prop.info.name}</h1></div>
}

export default About;