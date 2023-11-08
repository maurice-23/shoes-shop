import React, { Component } from 'react';
import './brands.css';
import adidas from './adidas.png';
import jordan from './jordan.png';
import nike from './nike.png';
class Brands extends Component {
    render() { 
        return (
            <div className='brands-container'>
                <div className="single">
                    <div className="logo">
                        <img src={jordan} alt="Jordan logo" height={100} />
                    </div>
                    <div className="name">
                        <p>Air Jordan</p>
                    </div>
                </div>
                <div className="single">
                    <div className="logo">
                        <img src={nike} alt="Jordan logo" height={100} />
                    </div>
                    <div className="name">
                        <p>Nike </p>
                    </div>
                </div>
                <div className="single">
                    <div className="logo adidas">
                        <img src={adidas} alt="Jordan logo" height={100} />
                    </div>
                    <div className="name ">
                        <p>Adidas</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Brands;