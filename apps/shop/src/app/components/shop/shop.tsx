import React from 'react';

import { Route, Link } from 'react-router-dom';

import './shop.scss';

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop = (props: ShopProps) => {
  return (
    <div>
      <h1>Welcome to shop component!</h1>

      <ul>
        <li>
          <Link to="/">shop root</Link>
        </li>
      </ul>
      <Route path="/" render={() => <div>This is the shop root route.</div>} />
    </div>
  );
};

export default Shop;
