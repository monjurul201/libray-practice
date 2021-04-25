import React, { useState,useEffect } from 'react';
import {  FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'


import {Navbar,NavLogo,NavContainer,MobileIcon,NavItem,NavLink,NavMenu,NavBtn,NavBtnLink} from './NavElement'

const Nav = ({toggle}) => {

    const [scrollNav,setScrollNav]=useState(false)

    const changeNav= () => {
         if(window.scrollY >=80){
             setScrollNav(true) 
         }else{
             setScrollNav(false)
         }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome =()=> {
        scroll.scrollToTop()
    }
    return (
       <>
       <IconContext.Provider value={{color:'#fff'}}>
       <Navbar scrollNav={scrollNav}>
           <NavContainer>
               <NavLogo to='/' onClick={toggleHome}>Vitual</NavLogo>
               <MobileIcon onClick={toggle}>
                 <FaBars></FaBars>
               </MobileIcon >
               <NavMenu>
                   <NavItem>
                       <NavLink to='about'
                        spy={true}
                        smooth={true}
                        exact='true'
                        offset={50}
                        duration={500} 
                        offset={-80}
                       >About</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='descover'
                         spy={true}
                         smooth={true}
                         exact='true'
                         offset={50}
                         duration={500} 
                         offset={-80}
                       >Descover</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='services'
                         spy={true}
                         smooth={true}
                         exact='true'
                         offset={50}
                         duration={500} 
                         offset={-80}     
                       >Services</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='signup'
                         spy={true}
                         exact='true'
                         smooth={true}
                         offset={50}
                         duration={500} 
                         offset={-80}
                         activeClass="active"
                       >SignUp</NavLink>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='signin'> SignIn</NavBtnLink>
               </NavBtn>
           </NavContainer>
       </Navbar>
       </IconContext.Provider>
       </>
    );
};

export default Nav;