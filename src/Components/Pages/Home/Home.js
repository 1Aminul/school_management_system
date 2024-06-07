import React from 'react';
import SliderSection from './SliderSection/SliderSection'
import FounderSection from './SliderSection/FounderSection.js/FounderSection';
import Message from './Message';
import Footer from './Footer';


const Home = () => {
    
    return (
        <div>
            <SliderSection/>
            <FounderSection/>
            <Message/>
            <Footer/>
        </div>
    );
};

export default Home;