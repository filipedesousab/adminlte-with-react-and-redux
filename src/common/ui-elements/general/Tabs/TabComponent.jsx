import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-bootstrap';

/**
 * [Tab, UIE031] Aba a ser exibido no Grupo de Abas
 * @param {string} props.eventKey Identificação da Tab
 * @param {string} props.title    Título da Tab
 * @param {object} props.children Conteúdo da Tab
 */
const TabComponent = props => (
  <Tab eventKey={props.eventKey} title={props.title}>
    {props.children}
  </Tab>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TabComponent.defaultProps = {
  eventKey: '',
  title: '',
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TabComponent.propTypes = {
  eventKey: PropTypes.string,
  title: PropTypes.node,
  children: PropTypes.node,
};

export default TabComponent;
