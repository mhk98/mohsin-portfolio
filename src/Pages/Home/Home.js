import React from 'react';
import Banner from '../Banner';
import Projects from '../Projects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;