import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "components/organisms/Sidebar/Sidebar";

const LoggedUserTemplate = ({children, pageType}) => (
    <>
        <Sidebar pageType={pageType}/>
        {children}
    </>
);

LoggedUserTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

LoggedUserTemplate.defaultProps = {
    pageType: 'notes'
};

export default LoggedUserTemplate;
