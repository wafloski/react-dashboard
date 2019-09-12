import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridViewTemplate from "templates/GridViewTemplate";
import Card from "components/molecules/Card/Card";

const Twitters = ({twitters}) => (
    <GridViewTemplate pageType="twitters">
        { twitters.map(({ title, content, twitterName, created, id }) => (
            <Card
                id={id}
                cardType="twitters"
                title={title}
                content={content}
                twitterName={twitterName}
                created={created}
                key={id}
            />
        ))}
    </GridViewTemplate>
);

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            twitterName: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        }),
    ),
};

Twitters.defaultProps = {
    twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);