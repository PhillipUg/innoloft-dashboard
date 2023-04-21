import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const productId = process.env.REACT_APP_PRODUCT_ID;

  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" activeClassName="text-blue-600" exact>
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink to={`/product/${productId}`} activeClassName="text-blue-600">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
