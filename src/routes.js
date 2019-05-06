import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';


import { HomeComponent } from './app/Home/components/HomeComponent';

/**
@name Router
* Handles routing
*/
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeComponent} />
    </Switch>
  </BrowserRouter>
);
export default Router;
