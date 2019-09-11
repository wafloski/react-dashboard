import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/pen.svg";

const StyledWrapper = styled.div`
    box-shadow: 0 10px 30px -10px #d8d8d8;
    border-radius: 10px;
    overflow: hidden;
    min-height: 360px;
    position: relative;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const StyledInnerWrapper = styled.div`
    padding: 10px 30px 15px;
    background-color: ${({ theme, activeColor }) => ( activeColor ? theme[activeColor] : theme.lightColor )};
    position: relative;
    
    :first-of-type {
        z-index: 1;
    }
    
    ${({flex}) => flex && css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 25px;
    `
    }
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledAvatar = styled.img`
  width: 80px;
  height: 80px;
  border: 5px solid ${({theme}) => theme.twitter};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({cardType}) => (
    <StyledWrapper>
        <StyledInnerWrapper activeColor={cardType}>
            <StyledHeading>Hello prosiaki !! </StyledHeading>
            <DateInfo>3 days ago</DateInfo>
            { cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/hello_roman"/> }
            { cardType === 'article' && <StyledLinkButton href="https://google.com"/> }
        </StyledInnerWrapper>
        <StyledInnerWrapper flex>
            <Paragraph>Lore  oipsdis fdiusifuods </Paragraph>
            <Button secondary>remove</Button>
        </StyledInnerWrapper>
    </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article'])
};

Card.defaultProps = {
  cardType: 'note'
};

export default Card;