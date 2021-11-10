import React, { Component } from 'react';
import DevpostLogo from '../Assets/devpost_logo.svg';

class DevpostButton extends Component{
    
    render(){
        return (
            <div id = "DevpostButton" >
                <a href="/"> <img id="devpostLogo" src = {DevpostLogo} onClick="openDevpost()" alt=""></img> </a>
            </div>
        )
    }
    openDevpost() {
        
    }
}

export default DevpostButton;