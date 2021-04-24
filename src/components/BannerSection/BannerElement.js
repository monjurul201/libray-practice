import styled from 'styled-components';

import {MdKeyboardArrowRight} from 'react-icons/md';
import {FaArrowRight } from 'react-icons/fa';


export const BannerContainer = styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:800px;
position:relative;
z-index:1;
//add :before style


:before {
    content:'';
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    height:100%;
    width:100%;
    
    background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6)100%),
    linear-gradient(180deg,rgba(0,0,0,0.2)0% ,transparent 100%);
    z-index:2;

}
   
`



export const BannerBg = styled.div`
   position: absolute;
   top:0;
   right:0;
   left:0;
   bottom:0;
   width:100%;
   height:100%;
   overflow:hidden;

`



export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34; 
`



export const BannerContent = styled.div`

 z-index:3;
 max-width:1200px;
 position:absolute;
 padding:8px 24px;
 display:flex;
 flex-direction:column;
 align-items:center;

`


export const BannerH1 = styled.h1`
color:#fff;
font-size:48px;
text-align:center;
font-family: 'Encode Sans', sans-serif;

@media screen and (max-width:768px ){
    font-size:40px;

}

@media screen and (max-width:480px ){
    font-size:32px;

}
   
`



export const BannerP = styled.p`
margin-top: 24px ;
color:#fff;
font-size:24px;
text-align:center;
max-width:600px;
font-family: 'Encode Sans', sans-serif;



@media screen and (max-width:768px ){
    font-size:24px;

}

@media screen and (max-width:480px ){
    font-size:15px;

}
`





export const BannerBtnWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;

   
`


export const ArrowForward = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;

   
`

export const ArrowRight = styled(FaArrowRight)`
margin-left:8px;
font-size:20px;

   
`