import React, { Component } from 'react';
import Vimage from '../image/contact.png';
import '../font-6/css/all.css';
import './contact.css'
class Contact extends Component {
    state = { 
        down : <i className='fa fa-v' style={{fontSize :'8px'}}></i>
    } 
    render() { 
        return (
            <div className='contact-container'>
                <div className="contact-wrapper">
                    <div className="value-right">
                        <img src={Vimage} alt="value image" style={{height: "500px", objectFit: "cover"}}/>
                    </div>
                    <div className="contact-left">
                        <h4>Contact us</h4>
                        <h3>Let's talk each other</h3>
                        <p className='decs'>
                            We are here for you,
                            if you have any product you want 
                            in our store contact us and ask anything, 
                            we have better way that will make u connected with us
                        </p>
                        <div className="card-container">
                            <div className="card">
                                <div className="head">
                                    <i className='fa fa-phone'></i>
                                    <div className='top'>
                                        <span>Call / Whatsapp</span>
                                        +250798782016
                                    </div>
                                    <i className='fab fa-whatsapp'></i>
                                </div>
                                <button className='button'>Call now</button>
                            </div>
                            <div className="card">
                                <div className="head">
                                    <i className='fab fa-instagram'></i>
                                    <div className='top'>
                                        <span>Instagram</span>
                                        ___maurice23
                                    </div>
                                </div>
                                <button className='button'>Message us</button>
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                <div className="head">
                                    <i className='fas fa-envelope'></i>
                                    <div className='top'>
                                        <span>Email</span>
                                        iragaba69k@gmail.com
                                    </div>
                                <i className='fa fa-pen'></i>
                                </div>
                                <button className='button'>Mail now</button>
                            </div>
                            <div className="card">
                                <div className="head">
                                    <i className='fa fa-location'></i>
                                    <div className='top'>
                                        <span>Location</span>
                                        Kora, Bigogwe
                                    </div>
                                    <i className='fa fa-map'></i>
                                </div>
                                <button className='button'>Visit Bigogwe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;