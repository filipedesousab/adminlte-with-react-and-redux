import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const TableComponent = props => (
  <Table striped bordered hover responsive size="sm">
    {props.children}
  </Table>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TableComponent.defaultProps = {
  children: PropTypes.node,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TableComponent.propTypes = {
  children: PropTypes.node,
};

export default TableComponent;