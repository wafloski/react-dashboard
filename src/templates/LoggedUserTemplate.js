import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "components/organisms/Sidebar/Sidebar";

const LoggedUserTemplate = ({children}) => (
    <>
        <Sidebar/>
        {children}
    </>
);

LoggedUserTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default LoggedUserTemplate;
