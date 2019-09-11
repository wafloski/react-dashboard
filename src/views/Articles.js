import React from 'react';
import LoggedUserTemplate from "templates/LoggedUserTemplate";
import Card from "components/molecules/Card/Card";

const Articles = () => (
    <LoggedUserTemplate pageType="article">
        <Card cardType="article" />
        <Card cardType="article" />
        <Card cardType="article" />
        <Card cardType="article" />
        <Card cardType="article" />
    </LoggedUserTemplate>
);

export default Articles;