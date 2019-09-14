import React from 'react';
import PropTypes from 'prop-types';
import GridViewTemplate from "templates/GridViewTemplate";
import Card from "components/molecules/Card/Card";
import {connect} from "react-redux";

const Notes = ({notes}) => (
    <GridViewTemplate pageType="notes">
        { notes.map(({ title, content, created, id}) => (
            <Card
                id={id}
                cardType="notes"
                title={title}
                content={content}
                created={created}
                key={id}
            />
        ))}
    </GridViewTemplate>
);

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired
        }),
    ),
};

Notes.defaultProps = {
    notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);