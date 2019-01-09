import React from 'react';

const Navbar = () => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span
        className="logo-mini"
        style={{ fontSize: 10, lineHeight: '10px', marginTop: 16 }}
      >
        <b>Volg</b>
        <p style={{ letterSpacing: '1px' }}>Clin</p>
      </span>
      <span className="logo-lg">
        <b>Volg</b>Clin
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="push-menu"></a>
    </nav>
  </header>
);

export default Navbar;
