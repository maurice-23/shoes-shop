import React, { Component } from 'react';
import './header.css';
import logo from '../image/logo.png';
class Header extends Component {
    render() { 
        return (
            <div>
                <section className="h-wrapper">
                    <div className="paddings inner-width h-container">
                        <div className="logo"><img src={logo} alt="logo" height={70}/></div>
                        <div className="flex-center h-menu">
                            <a href="/shoes">Shoes</a>
                            <a href="/Value">Our value</a>
                            <a href="/contact">Contact us</a>
                            <a href="">Get started</a>
                            <button className='button'>Contact</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Header;