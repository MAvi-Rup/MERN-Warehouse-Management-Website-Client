import React from 'react';
import Section from '../../SectionExtra/Section1';
import Baneer from '../Banner/Baneer';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Baneer></Baneer>
            <Section></Section>
            <Shop></Shop>
        </div>
    );
};

export default Home;