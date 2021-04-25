import React, { useState } from 'react';

import Video from '../../Videos/video.mp4';
import {Button} from '../ButtonElement/ButtonElement'
import {BannerContainer,BannerBg,VideoBg,BannerContent,BannerH1,BannerP,BannerBtnWrapper,ArrowForward,ArrowRight} from './BannerElement'

const BannerSection = () => {
const [hover,setHover]=useState(false)
const onHover = () => {
    setHover(!hover)
}


    return (
      <BannerContainer>
          <BannerBg>
              <VideoBg autoPlay loop muted src ={Video} type='video/mp4'></VideoBg>
          </BannerBg>
          <BannerContent>
              <BannerH1>Virtual Banking Made Esay.</BannerH1>
              <BannerP>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, rerum consequuntur consectetur nostrum sit cupiditate.
              </BannerP>
              <BannerBtnWrapper>
                  <Button  to='signup' onMouseEnter={onHover} onMouseLeave={hover}
                  primary='true'
                  dark='true'>
                      Get Started {hover ? <ArrowForward/> : < ArrowRight/>}
                  </Button>
              </BannerBtnWrapper>
          </BannerContent>
      </BannerContainer>
    );
};

export default BannerSection;