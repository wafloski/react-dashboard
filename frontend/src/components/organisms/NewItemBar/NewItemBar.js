import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from  'actions';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    height: 100vh;
    width: 600px;
    background-color: #fff;
    padding: 50px 60px;
    border-left: 8px solid ${({ theme, activecolor }) => theme[activecolor]};
    box-shadow: -10px 0 10px rgba(0,0,0,0.3);
    transform: translate(${({ isVisible }) => ( isVisible ? '0' : '100%')});
    transition: transform .25s ease;
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;

const StyledTextarea = styled(Input)`
    border-radius: 15px;
    height: 30vh;
    margin-top: 30px
`;

const StyledInput = styled(Input)`
    margin-top: 30px;
`;

const StyledParagraph = styled(Paragraph)`
    color: coral;
`;

const StyledButton = styled(Button)`
    margin-top: 40px;
`;

const NewItemBar = ({pageContext, isVisible, addItem, handleClose}) => (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
        <Heading big>Create new {pageContext}</Heading>
        <Formik
            initialValues={{title: '', content: '', articleUrl: '', twitterName: ''}}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = 'Title required';
                }
                if (!values.content) {
                    errors.content = 'Content required';
                }
                if ((pageContext === 'twitters') && !values.twitterName) {
                    errors.twitterName = 'Twitter name required';
                }
                if ((pageContext === 'articles') &&!values.articleUrl) {
                    errors.articleUrl = 'Article url required';
                }
                return errors;
            }}
            onSubmit = {(values, { setSubmitting }) => {
                addItem(pageContext, values);
                setSubmitting(false);
                handleClose();
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <StyledForm>
                    <StyledInput
                        type="text"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        placeholder="title"
                    />
                    { errors.title && <StyledParagraph>{errors.title && touched.title && errors.title}</StyledParagraph> }
                    { pageContext === 'twitters' &&
                        <StyledInput
                            type="text"
                            name="twitterName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.twitterName}
                            placeholder="Account Name eg. dan_abramov"
                        />
                    }
                    { errors.twitterName && <StyledParagraph>{errors.twitterName && touched.twitterName && errors.twitterName}</StyledParagraph> }
                    { pageContext === 'articles' &&
                        <StyledInput
                            type="text"
                            name="articleUrl"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.articleUrl}
                            placeholder="Article link"
                        />
                    }
                    { errors.articleUrl && <StyledParagraph>{errors.articleUrl && touched.articleUrl && errors.articleUrl}</StyledParagraph> }
                    <StyledTextarea
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.content}
                        placeholder="Content"
                    />
                    { errors.content && <StyledParagraph>{errors.content && touched.content && errors.content}</StyledParagraph> }
                    <StyledButton type="submit" disabled={isSubmitting} activecolor={pageContext}>Add item</StyledButton>
                </StyledForm>
            )}
        </Formik>
    </StyledWrapper>
);

NewItemBar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible: PropTypes.bool,
    addItem: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
    pageContext: 'notes',
    isVisible: false,
};

const mapDispatchToProps = dispatch => ({
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType,itemContent))
});

export default connect(null,mapDispatchToProps)(withContext(NewItemBar));