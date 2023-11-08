import React, { Component } from 'react';
import './hero.css';
import CountUp from 'react-countup';
class Hero extends Component {
     
    render() { 
        return (
            <section className="hero-container" >
                <div className="hero-wrapper">
                    <div className="hero-right">
                        <img src={require('../image/img1.png')} alt="Jordan 4 " width={200}/>
                    </div>
                    <div className="hero-left">
                        <div className="header">
                            <h1>
                                Discover your<span className='orange'></span> <br />
                                D<span>esired</span> shoes here <br />
                                <span>on very</span> low price 
                            
                            </h1><br />
                            <p>We are here to bring the<br /> shoes 
                            of best quality ever, explore <br /> us to see more
                            
                            </p>
                        </div>
                        <div className="search">
                            <i className='fa fa-search'></i>
                            <input type="search" />
                            <button className='button'>Search</button>
                        </div>
                        <div className="flex-center">
                            <div className="one">
                                <p><i className='fa fa-users'></i><CountUp start={10000} end={12000} duration={3}/><span>+</span> </p>
                                <strong>Happy customer</strong>
                            </div>
                            <div className="one">
                                <p><i className='fa fa-trophy'> </i><CountUp start={1} end={50} duration={3}/><span>+</span></p>
                                <strong>Won Awards</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Hero;