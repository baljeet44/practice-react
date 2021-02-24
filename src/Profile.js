import React from 'react';

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:'baljeet',
            email:'baljeet.icfai2@gmail.com',
            count:0,
            show:true
        }
    }
    componentDidMount(){
        console.log('profile component with class');
    }
    updateState(){
        this.setState({
            name:'rahul',
            count:this.state.count+1
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.show?
                    <h1>{this.props.text} {this.state.count} with {this.state.name} {this.state.email}</h1>
                    :null
                }
                <button onClick={()=>{this.updateState()}}>update name</button>
                <button onClick={()=>{this.setState({show:!this.state.show})}}>hide and show</button>
            </div>
        )
    }
}

export default Profile;