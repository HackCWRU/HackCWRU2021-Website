import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'
class Navbar extends Component {
    

    render() {
        return (
            <div class="navbar">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/sponsors">SPONSORS</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/schedule">SCHEDULE</Link></li>
                </ul>
            </div>
        )    
    }
}

export default Navbar