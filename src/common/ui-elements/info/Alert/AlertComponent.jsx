import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import { Label } from '../../';

/**
 * [Alert, UIE025] Alert a ser apresentado no componente [Alerts, UIL004]
 * @param   {string} props.title          Título do Alert
 * @param   {object} props.children       Corpo do componente
 * @param   {string} props.color          Cor do Alert [info, success, warning, danger]
 */
class AlertComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };

    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  render() {
    if (this.state.show) {
      let icon = '';

      if (this.props.color === 'info') {
        icon = 'fa fa-info';
      } else if (this.props.color === 'warning') {
        icon = 'fa fa-warning';
      } else if (this.props.color === 'danger') {
        icon = 'fa fa-ban';
      } else if (this.props.color === 'success') {
        icon = 'fa fa-check';
      }

      return (
        <Alert
          bsStyle={this.props.color}
          onDismiss={this.handleDismiss}
        >
          <h4><Label icon={icon}>{this.props.title}</Label></h4>
          {this.props.children}
        </Alert>
      );
    }

    return false;
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
AlertComponent.defaultProps = {
  color: 'info',
  title: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AlertComponent.propTypes = {
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  title: PropTypes.string,
  children: PropTypes.node,
};

export default AlertComponent;
