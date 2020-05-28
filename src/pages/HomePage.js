import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import TypicalText from '../components/TypicalText';
import CarouselTry from '../components/CarouselTry';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <TypicalText></TypicalText>
            <CarouselTry />
        </div>
    );

}

export default HomePage;