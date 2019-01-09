import React from 'react';

export default props => (
  <li>
    <a href={props.href}>
      <i className={`fa fa-${props.icon}`}></i> <span className="logo-mini">{props.label}</span>
    </a>
  </li>
);
