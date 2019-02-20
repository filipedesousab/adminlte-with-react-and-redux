import React from 'react';

const FooterComponent = () => (
  <footer className="main-footer row">
    <div className="col-md-4">
      <strong>
        <font>VolgClin © 2019 </font>
        <a href="https://volgsoft.com.br">
          <font>Volgsoft</font>
        </a>
      </strong>
    </div>
    <div className="col-md-4">
      <div className="text-center">
        <font>
          <strong>Suporte:</strong>
          <a href="tel:81982890000">
            <font> (81) 98289-0000</font>
          </a>
        </font>
      </div>
    </div>
    <div className="col-md-4">
      <div className="text-right">
        <b><font>Versão</font></b>
        <font> 0.0.1</font>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
