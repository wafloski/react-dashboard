import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from "templates/DetailsTemplate";
import { routes } from 'routes';

class Details extends Component {

    // eslint-disable-next-line react/state-in-constructor
    state = {
        pageType: 'notes'
    };

    componentDidMount() {
        const { match } = this.props;

        switch(match.path) {
            case routes.note:
                this.setState({ pageType: 'notes'});
                break;
            case routes.twitter:
                this.setState({ pageType: 'twitters'});
                break;
            case routes.article:
                this.setState({ pageType: 'articles'});
                break;
            default:
                console.log("something went wrong");
        }
    };

    render () {
        const testArticle = {
            id: 1,
            title: 'Wake me up when Vue ends',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            twitterName: 'javascript',
            articleUrl: 'https://www.youtube.com/watch?v=FWDXwrgdm9w',
            created: '1 day',
        };

        const { pageType } = this.state;

        return (
            <DetailsTemplate
                pageType={pageType}
                title={testArticle.title}
                created={testArticle.created}
                content={testArticle.content}
                articleUrl={testArticle.articleUrl}
                twitterName={testArticle.twitterName}
            />
        )
    }
}

Details.propTypes = {
    match: PropTypes.string.isRequired,
};

export default Details;