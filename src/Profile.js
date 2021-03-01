import React from 'react';
import Eventu from './Eventu';
import Eventf from './Eventf';
import Lifec from './Lifec';
import {Button} from 'react-bootstrap';

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:'baljeet',
            email:'baljeet.icfai2@gmail.com',
            count:0,
            show:true
        }
        this.userRef=React.createRef();
    }
    componentDidMount(){
        //console.log('profile component with class');
    }
    updateState(){
        this.setState({
            name:'rahul',
            count:this.state.count+1
        })
    }
    editVal(){
        console.warn(this.userRef);
        this.userRef.current.focus();
        this.userRef.current.value="1000";
    }
    render(){
        return (
            <div>
                {
                    this.state.show?
                    <h1>{this.props.text} {this.state.count} with {this.state.name} {this.state.email}</h1>
                    :null
                }
                <input ref={this.userRef} type="text" name="user"/>
                <Button onClick={()=>{this.editVal()}}>Click Ref</Button>
                <button onClick={()=>{this.updateState()}}>update name</button>
                <Button onClick={()=>{this.setState({show:!this.state.show})}}>hide and show</Button>
                <Eventu />
                <Eventf />
                <Lifec />
            </div>
        )
    }
}

export default Profile;