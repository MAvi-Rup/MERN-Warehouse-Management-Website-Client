import React from 'react';
import Title from '../../Header/Title/Title';
import Section from '../../SectionExtra/Section1';
import Baneer from '../Banner/Baneer';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Title title="Home"></Title>
            <Baneer></Baneer>
            <Section></Section>
            <Shop></Shop>
        </div>
    );
};

export default Home;