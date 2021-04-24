import React, { useState } from 'react';
import BannerSection from '../../components/BannerSection/BannerSection';
import { homeObjOne, homeObjTwo,homeObjThree } from '../../components/InfoSection/Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import Nav from '../../components/Nav/Nav';
import Services from '../../components/Services/Services';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Nav toggle={toggle}/>
            <BannerSection/>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services/>
            <InfoSection {...homeObjThree} />
        </>
    );
};

export default Home;