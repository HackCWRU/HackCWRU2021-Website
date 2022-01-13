import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class Navbar extends Component {
    

    render() {
        return (
            <div class="navbar">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#sponsors">SPONSORS</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#schedule">SCHEDULE</a></li>
                </ul>
            </div>
        )    
    }
}

export default Navbar