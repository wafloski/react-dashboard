import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from "templates/MainTemplate";
import Notes from "views/Notes";
import Twitters from "views/Twitters";
import Articles from "views/Articles";
import Details from "views/Details";

const Root = () => (
    <BrowserRouter>
        <MainTemplate>
            <Switch>
                <Route exact path ={routes.home} render={() => <Redirect to="/notes" />} />
                <Route exact path={routes.notes} component={Notes} />
                <Route path={routes.note} component={Details} />
                <Route exact path={routes.articles} component={Articles} />
                <Route path={routes.article} component={Details} />
                <Route exact path={routes.twitters} component={Twitters} />
                <Route path={routes.twitter} component={Details} />
            </Switch>
        </MainTemplate>
    </BrowserRouter>
);

export default Root;
