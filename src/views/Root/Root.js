import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
    <>
        <GlobalStyle/>
        <Button>close / save</Button>
        <Button secondary>remove</Button>
    </>
);

export default Root;
