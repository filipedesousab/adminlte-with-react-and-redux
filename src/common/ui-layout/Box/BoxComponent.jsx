import React from 'react';

export default (props) => {
  let color = 'box-primary';

  if (props.color) {
    color = `box-${props.color}`;

    if (color === 'muted') {
      color = '';
    }
  }

  return (
    <div className={`box ${color}`}>
      {props.title ?
        <div className="box-header with-border">
          <h3 className="box-title">{props.title}</h3>
        </div>
      : false}
      <div className="box-body">
        {props.children}
      </div>
      {props.footer ?
        <div className="box-footer">
          {props.footer}
        </div>
      : false}
    </div>
  )
};
