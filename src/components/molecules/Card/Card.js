import React from 'react';
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";

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
    background-color: ${({ theme, yellow }) => ( yellow ? theme.primary : theme.lightColor )};
    
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

const Card = () => (
    <StyledWrapper>
        <StyledInnerWrapper yellow>
            <StyledHeading>Hello prosiaki !! </StyledHeading>
            <DateInfo>3 days ago</DateInfo>
        </StyledInnerWrapper>
        <StyledInnerWrapper flex>
            <Paragraph>Lore  oipsdis fdiusifuods </Paragraph>
            <Button secondary>remove</Button>
        </StyledInnerWrapper>
    </StyledWrapper>
);

export default Card;