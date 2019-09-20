import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/pen.svg";
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

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
        cursor: pointer;
        transition: ${({theme}) => theme.hoverTransitionTime};
        :hover {
            opacity: ${({theme}) => theme.hoverOpacity};
        }
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

const StyledAvatar = styled.img`
  width: 80px;
  height: 80px;
  border: 5px solid ${({theme}) => theme.twitters};
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

class Card extends Component {
    state = {
        redirect: false,
    };

    handleCardClick = () => this.setState({ redirect: true });

    render() {
        const { id, pageContext, title, twitterName, articleUrl, content, removeItem } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`${pageContext}/${id}`} />;
        }

        return (
            <StyledWrapper>
                <StyledInnerWrapper onClick={this.handleCardClick} activeColor={pageContext}>
                    <StyledHeading>{title} </StyledHeading>
                    {pageContext === 'twitters' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`}/>}
                    {pageContext === 'articles' && <StyledLinkButton href={articleUrl}/>}
                </StyledInnerWrapper>
                <StyledInnerWrapper flex>
                    <Paragraph>{content} </Paragraph>
                    <Button secondary onClick={() => removeItem(pageContext, id)}>remove</Button>
                </StyledInnerWrapper>
            </StyledWrapper>
        )
    }
};

Card.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired
};

Card.defaultProps = {
    pageContext: 'notes',
    twitterName: null,
    articleUrl: null
};

const mapDispatchToProps = dispatch => ({
    removeItem: (itemType,id) => dispatch(removeItemAction(itemType,id))
});

export default connect(null,mapDispatchToProps)(withContext(Card));