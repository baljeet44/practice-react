import React from 'react';

export default class Eventu extends React.Component{
    constructor(){
        super();
    }

    clickhere(){
        alert('you are clicked');
    }
    render(){
        return (
            <>
            <button onClick={this.clickhere.bind()} >click here</button>
            </>
        )  
        
    }
}