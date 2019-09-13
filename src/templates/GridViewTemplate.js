import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import LoggedUserTemplate from 'templates/LoggedUserTemplate';
import Input from "components/atoms/Input/Input";
import Heading from "components/atoms/Heading/Heading";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';

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

const StyledButtonIcon = styled(ButtonIcon)`
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: ${({ activecolor, theme }) => theme[activecolor]};
    background-size: 30%;
    border-radius: 50%;
    z-index: 11;
`;

class GridViewTemplate extends Component {
    state = {
        isNewItemBarVisible: false
    };

    handleNewItemBarToggle = () => this.setState(prevState => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible }));

    render() {
        const { children, pageContext } = this.props;
        const { isNewItemBarVisible } = this.state;

        return (
            <LoggedUserTemplate>
                <StyledWrapper>
                    <StyledPageHeader>
                        <Input search placeholder="search"/>
                        <StyledHeading big as="h1">{pageContext} </StyledHeading>
                        <StyledParagraph>9 {pageContext} </StyledParagraph>
                    </StyledPageHeader>
                    <StyledGrid>
                        {children}
                    </StyledGrid>
                    <StyledButtonIcon icon={plusIcon} activecolor={pageContext} onClick={this.handleNewItemBarToggle}/>
                    <NewItemBar isVisible={isNewItemBarVisible}/>
                </StyledWrapper>
            </LoggedUserTemplate>
        );
    };
};

GridViewTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

GridViewTemplate.defaultProps = {
    pageContext: 'notes'
};

export default withContext(GridViewTemplate);
