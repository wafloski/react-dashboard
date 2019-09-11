import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const StyledSidebar = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    height: 100vh;
    background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 18px 0;
`;

const StyledLogo = styled.p`
    height: 50px;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.darkColor};
    font-weight: 600;
`;

const StyledLinkList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
    margin-top: auto;
`;

const Sidebar = ({pageType}) => (
    <StyledSidebar activeColor={pageType}>
        <StyledLogo>wfx</StyledLogo>
        <StyledLinkList>
            <li>
                <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active"/>
            </li>
        </StyledLinkList>
        <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon}/>
    </StyledSidebar>
);

export default Sidebar;

