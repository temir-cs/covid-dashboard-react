import React from 'react';
import './header.scss';

const Header = () => (
  <header className="page-header">
    <h1 className="page-header__title">
      COVID-19 Dashboard
      <p className="page-header__remark"> (if you see 0, there is no data provided)</p>
    </h1>
  </header>
);

export default Header;
