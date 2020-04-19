import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Shop } from './components/shop/shop';
import { Navbar } from './components/navbar/navbar';

import './app.scss';

const Switchboard = () => (
  <Switch>
    <Route path="/">
      <Shop />
    </Route>
  </Switch>
);

export const App = () => {
  return (
    <div className="container">
      <h1 className="title is-1">KITCHEN0 SHOP</h1>

      <Router>
        <Navbar />

        <Switchboard />
      </Router>
    </div>
  );
};

export default App;
