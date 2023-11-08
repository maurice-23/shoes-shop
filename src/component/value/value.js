import React, { Component } from 'react';
import './value.css';
import Vimage from '../image/value.png';
import '../font-6/css/all.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState

} from 'react-accessible-accordion';
import data from '../index';
class Value extends Component {
    state = { 
        down : <i className='fa fa-v' style={{fontSize :'8px'}}></i>
    } 
    render() { 
        return (
            <div className='value-container'>
                <div className="value-wrapper">
                    <div className="value-left">
                        <h4>Our value</h4>
                        <h3>Value give to you</h3>

                        <p className='decs'>
                            We us your shoe provider 
                            we offer the best quality of shoes 
                            when you are in public they will ask you, 
                            where did you buy this shoes
                        </p>
                        <Accordion 
                            className='accordion'
                            preExpanded={[0]}

                        >
                            {
                                data.map((item, i) => (
                                    <AccordionItem
                                        className='accordionItem' key={i} uuid={i}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='ac-button'>
                                                <span><i className={item.icon}></i></span> 
                                                <p className='p-text'>
                                                    {item.heading}
                                                </p>
                                                <span>
                                                    {this.state.down}
                                                </span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="sec-text">
                                                {item.detail}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                    <div className="value-right">
                        <img src={Vimage} alt="value image" 
                        style={{
                            height: "400px",
                            width: "400px", 
                            objectFit: "cover",
                            borderRadius: "6px"
                        }} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Value;