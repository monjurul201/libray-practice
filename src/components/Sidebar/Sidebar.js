import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarRoute,SidebarMenu,SidebarWrapper} from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>About </SidebarLink>
                    <SidebarLink to='/descover' onClick={toggle}>Descover</SidebarLink>
                    <SidebarLink to='/services' onClick={toggle}> Services</SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>Contact </SidebarLink>
                    <SidebarLink to='/signup' onClick={toggle}>SignUP</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>SignIn</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
            
        </>
    );
};

export default Sidebar;