import React from 'react';
import {Button} from '../ButtonElement/ButtonElement';
import { Colum2, ImgWrap, InfoContainer, InfoRow,InfoWrapper,Colum1,TextWrapper,Topline,Heading,SubTitle,BtnWrap,Img } from './InfoElement';

const InfoSection = ({lightBg,
    id,
    imgStart,
    topline,
    lightText,
    headline,
    darkText,
    deccription,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Colum1>
                        <TextWrapper>
                            <Topline>{topline}</Topline>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{deccription}</SubTitle>
                            <BtnWrap>
                                <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 :0 }
                                dark={dark ? 1 :0 }
                                dark2={dark2 ? 1:0}
                                 to ='descover' >
                                     {buttonLabel} 
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Colum1>
                    <Colum2>
                         <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Colum2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>    
        </>
    );
};

export default InfoSection;