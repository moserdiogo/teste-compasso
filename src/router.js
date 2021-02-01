import React from 'react';
import UserSearch from './components/user-search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserSearch} />
                <Route path="/" component={() => <h1 className="text-center mt-5">404</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;