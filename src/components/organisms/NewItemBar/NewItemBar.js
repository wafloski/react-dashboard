import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    height: 100vh;
    width: 600px;
    background-color: #fff;
    padding: 100px 60px;
    border-left: 8px solid ${({ theme, activecolor }) => theme[activecolor]};
    box-shadow: -10px 0 10px rgba(0,0,0,0.3);
    transform: translate(${({ isVisible }) => ( isVisible ? '0' : '100%')});
    transition: transform .25s ease;
`;

const StyledTextarea = styled(Input)`
    border-radius: 15px;
    margin: 30px 0 50px;
    height: 30vh;
`;

const StyledInput = styled(Input)`
    margin-top: 30px;
`;

const NewItemBar = ({pageContext, isVisible}) => (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
        <Heading big>Create new {pageContext}</Heading>
        <StyledInput placeholder={ pageContext === 'twitters' ? 'Account Name eg. dan_abramov' : 'Title' } />
        { pageContext === 'articles' && <StyledInput placeholder="link"/> }
        <StyledTextarea as="textarea" placeholder="content"/>
        <Button activecolor={pageContext}>Add item</Button>
    </StyledWrapper>
);

export default withContext(NewItemBar);