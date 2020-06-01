import React from 'react';
import Hero from '../components/Hero';
import TypicalText from '../components/TypicalText';
import CarouselTry from '../components/CarouselTry';
import './HomePage.css';
import { IoIosArrowDropdown } from "react-icons/io";

function HomePage(props) {

    return(
        <div>
            <div className="background">
                
                <div align ="center" className = "headline"><Hero title={props.subTitle} />
                    <div className ="translucent-box">
                        <TypicalText></TypicalText>
                    
                    </div>
                    
                </div>
                <div align="center" className="arrow">
                    <IoIosArrowDropdown></IoIosArrowDropdown>
                </div>
            </div>
            <div className="background-2">
                <CarouselTry />
            </div>
            
        </div>
    );

}

export default HomePage;