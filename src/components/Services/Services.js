import React from 'react';
import Icon from '../../Images/icon1.svg'
import Icon1 from '../../Images/dev.svg'
import Icon2 from '../../Images/icon2.svg'
import { ServicesContainer,ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,ServicesH2,ServicesP } from './ServicesElement';

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon} />
                        <ServicesH2>Web Design</ServicesH2>
                        <ServicesP>We helps Reduce Your fees  and increase your Overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Web Devloper</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat quibusdam consequatur rem similique reprehenderit!</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>MarketPlace </ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corporis.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;