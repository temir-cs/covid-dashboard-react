import React from 'react';
import './footer.scss';
import logo from './rs-logo.svg';

const Footer = () => (
  <footer className="page-footer">
    <a className="page-footer__logo" href="https://rs.school/js/" target="blank">
      <img className="page-footer__img" src={logo} alt="RS School Logo" />
    </a>
    <span className="page-footer__text">
      2020 Github
      <a className="page-footer__link" href="https://github.com/temir-cs" target="blank">
        temir-cs
      </a>
      <a className="page-footer__link" href="https://github.com/aitzhans" target="blank">
        aitzhans
      </a>
    </span>
  </footer>
);

export default Footer;
