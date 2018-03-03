import React from 'react';
import {Carousel} from 'react-responsive-carousel';

export const WrappedSlider = ({children}) => {
    const settings = {
        showArrows: true,
        showThumbs: false,
        infiniteLoop: true,
        autoPlay: true,
        interval: 1000,
        centerMode: true,
        showIndicators: false,
        showStatus: false
    };

    return (
        <Carousel {...settings}>
            {children}
        </Carousel>
    );
};