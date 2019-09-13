import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtonIcon from "components/atoms/ButtonIcon/ButtonIcon";
import logoIcon from 'assets/icons/logo.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import withContext from 'hoc/withContext';

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

const StyledLogo = styled(NavLink)`
    width: 50px;
    height: 50px;
    background-image: url(${logoIcon});
    background-size: 50px;
    background-position: center;margin-bottom: 40px;
`;

const StyledLinkList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
    margin-top: auto;
`;

const Sidebar = ({pageContext}) => (
    <StyledSidebar activeColor={pageContext}>
        <StyledLogo to="/" />
        <StyledLinkList>
            <li>
                <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active"/>
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

Sidebar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

Sidebar.defaultProps = {
    pageContext: 'notes'
};

export default withContext(Sidebar);

