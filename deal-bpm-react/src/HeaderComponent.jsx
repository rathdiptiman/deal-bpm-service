import React, { Component } from 'react'
import './bootstrap.css';



class HeaderComponent extends Component {
    render() {
        

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/diptimanrath" className="navbar-brand">DealBPM</a></div>
                    
                </nav>
            </header>
        )
    }
}

export default HeaderComponent