import React from 'react';

export default class Lifec extends React.Component{
    constructor(){
        super();
        this.state={
            name:'baljeet'
        }
        console.log('constructor');
    }
    componentDidMount(){
        this.setState({
            name:'rohit'
        })
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
        console.log('render');
        return(
            <div>
                Hello World
            </div>
        )
    }

}