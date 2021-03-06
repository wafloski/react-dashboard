import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from "templates/GridViewTemplate";
import Card from "components/molecules/Card/Card";
import {connect} from "react-redux";

const Articles = ({articles}) => (
    <GridViewTemplate pageType="articles">
        { articles.map(({ title, content, articleUrl, created, id }) => (
            <Card
                id={id}
                cardType="articles"
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
            />
        ))}
    </GridViewTemplate>
);

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired
        }),
    ),
};

Articles.defaultProps = {
    articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
