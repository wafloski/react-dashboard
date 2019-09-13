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
        const { id, cardType, title, created, twitterName, articleUrl, content, removeItem } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`${cardType}/${id}`} />;
        }

        return (
            <StyledWrapper onClick={this.handleCardClick}>
                <StyledInnerWrapper activeColor={cardType}>
                    <StyledHeading>{title} </StyledHeading>
                    <DateInfo>{created} </DateInfo>
                    {cardType === 'twitters' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`}/>}
                    {cardType === 'articles' && <StyledLinkButton href={articleUrl}/>}
                </StyledInnerWrapper>
                <StyledInnerWrapper flex>
                    <Paragraph>{content} </Paragraph>
                    <Button secondary onClick={() => removeItem(cardType, id)}>remove</Button>
                </StyledInnerWrapper>
            </StyledWrapper>
        )
    }
};

Card.propTypes = {
    cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
    removeItem: PropTypes.func.isRequired
};

Card.defaultProps = {
    cardType: 'notes',
    twitterName: null,
    articleUrl: null
};

const mapDispatchToProps = dispatch => ({
    removeItem: (itemType,id) => dispatch(removeItemAction(itemType,id))
});

export default connect(null,mapDispatchToProps)(Card);