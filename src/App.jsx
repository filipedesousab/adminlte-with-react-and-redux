import React from 'react';
import './common/dependencies';

// import Routes from './routes';
import { Navbar, Sidebar } from './common/ui-layout';

export default () => (
  <div className="wrapper">
    <Navbar />
    <Sidebar />
    {/*<div className="content-wrapper">
      <Routes />
    </div>
    <Footer />*/}
  </div>
);
