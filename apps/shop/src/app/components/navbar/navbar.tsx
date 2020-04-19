import React from 'react';

import { Route, Link } from 'react-router-dom';

import './navbar.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <div>
      <h1>Welcome to navbar component!</h1>

      <ul>
        <li>
          <Link to="/">navbar root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the navbar root route.</div>}
      />
    </div>
  );
};

export default Navbar;
