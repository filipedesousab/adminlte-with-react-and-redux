import React from 'react';

const FooterComponent = () => (
  <footer className="main-footer row">
    <div className="col-md-4">
      <strong>
        <font>AdminLTE © 2019 </font>
        <a href="https://adminlte.io">
          <font>AdminLTE</font>
        </a>
      </strong>
    </div>
    <div className="col-md-4">
      <div className="text-center">
        <font>
          <strong>Suporte:</strong>
          <a href="tel:81900000000">
            <font> (81) 90000-0000</font>
          </a>
        </font>
      </div>
    </div>
    <div className="col-md-4">
      <div className="text-right">
        <b><font>Versão</font></b>
        <font> 2.4.8</font>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
