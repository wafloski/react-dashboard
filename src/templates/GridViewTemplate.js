import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import LoggedUserTemplate from 'templates/LoggedUserTemplate';
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
    padding: 10px 150px 30px 50px;
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
`;

const StyledPageHeader = styled.div`
    margin: 20px 0 50px;
`;

const StyledHeading = styled(Heading)`
    margin: 20px 0 0;
    
    ::first-letter {
        text-transform: uppercase;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin: 0;
    font-weight: ${({theme}) => theme.fontWeight.bold};
`;

const GridViewTemplate = ({children, pageType}) => (
    <LoggedUserTemplate pageType={pageType}>
        <StyledWrapper>
            <StyledPageHeader>
                <Input search placeholder="search"/>
                <StyledHeading big as="h1">{pageType} </StyledHeading>
                <StyledParagraph>9 {pageType} </StyledParagraph>
            </StyledPageHeader>
            <StyledGrid>
                {children}
            </StyledGrid>
        </StyledWrapper>
    </LoggedUserTemplate>
);

GridViewTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

GridViewTemplate.defaultProps = {
    pageType: 'notes'
};

export default GridViewTemplate;
