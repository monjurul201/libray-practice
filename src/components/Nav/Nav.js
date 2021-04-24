import React from 'react';
import {  FaBars} from 'react-icons/fa';


import {Navbar,NavLogo,NavContainer,MobileIcon,NavItem,NavLink,NavMenu,NavBtn,NavBtnLink} from './NavElement'

const Nav = ({toggle}) => {
    return (
       <>
       <Navbar>
           <NavContainer>
               <NavLogo to='/'>Dolla</NavLogo>
               <MobileIcon onClick={toggle}>
                 <FaBars></FaBars>
               </MobileIcon >
               <NavMenu>
                   <NavItem>
                       <NavLink to='/about'>About</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='/descover'>Descover</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='/services'>Services</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='/contact'>Contact</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink to='/signup'>SignUp</NavLink>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to='/signin'> SignIn</NavBtnLink>
               </NavBtn>
           </NavContainer>
       </Navbar>
       </>
    );
};

export default Nav;