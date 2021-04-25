import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {FooterConteiner,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIconLink} from './FooterElement.js'
const Footer = () => {
    return (
        <>
        <FooterConteiner>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle style={{color:'hotpink'}}>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How its Work</FooterLink>
                            <FooterLink to='/'>Testimonial</FooterLink>
                            <FooterLink to='/'>Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle style={{color:'hotpink'}}>Contact</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Support</FooterLink>
                            <FooterLink to='/'>SponsorShip</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle style={{color:'hotpink'}}>Videos</FooterLinkTitle>
                            <FooterLink to='/'>Submit Video</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>
                            <FooterLink to='/'>Infuencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle style={{color:'hotpink'}}>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Twiter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                     <SocialMediaWrap>
                         <SocialLogo to='/'>Virtual</SocialLogo>
                         <WebsiteRights>Monjurul Islam {new Date().getFullYear()} All Right Reserved.</WebsiteRights>
                       <SocialIcon>
                            <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                               <FontAwesomeIcon icon={faFacebook}/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Istagram'>
                            <FontAwesomeIcon icon={faInstagram}/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twiter'>
                               <FontAwesomeIcon icon={faTwitter}/>
                            </SocialIconLink>
                       </SocialIcon>
                         
                     </SocialMediaWrap>   
                </SocialMedia>
            </FooterWrap>
        </FooterConteiner>
        </>
    );
};

export default Footer;