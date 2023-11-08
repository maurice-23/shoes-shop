import React, { Component } from 'react';
import './footer.css';
import LogoImage from '../image/logo.png'
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer>
                <div className="footer-container">
                    <div className="head">
                        <p>Get started now</p>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img src={LogoImage} alt="Logo image" height={60}/>
                            <p>&copy; Maurice 2023 Alright reserved </p>
                        </div>
                        <div className="right">
                            <p>Imformation</p>
                            <span>Kora, Bigogwe, Nyabihu, Rwanda</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;