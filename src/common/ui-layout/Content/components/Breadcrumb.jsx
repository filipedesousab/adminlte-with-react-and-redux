import React from 'react';
import genHash from 'random-hash';

export default props => (
  <ol className="breadcrumb">
    <li><i className="fa fa-dashboard"></i></li>
    {props.breadcrumb.map(item => (
      <li key={genHash()}>
        <a href={item.href ? item.href : '#'}>{item.label}</a>
      </li>
    ))}
  </ol>
);
