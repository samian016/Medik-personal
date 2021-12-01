import React from 'react';
import Servises from '../Servises/Servises';
import Slider from '../Slider/Slider';
/* aaaaaah, yes this is the home component to make home sweeter. note onething, i am using footer global all over the site, for this resion there is no footer component.  */
const Home = () => {
    return (
        <div id="home" className="mb-5">
            <Slider></Slider>
            <Servises></Servises>
        </div>
    );
};

export default Home;