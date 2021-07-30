import React from 'react';
import { BrowserRouter as Router, 
         Switch, 
         Route, 
         Redirect 
} from 'react-router-dom';
import {App} from './App';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    );
}