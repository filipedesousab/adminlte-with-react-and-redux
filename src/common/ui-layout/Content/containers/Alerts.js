import { connect } from 'react-redux';

import AlertsComponent from '../components/Alerts';

/**
 * Mapeando estado do redux para a props do AlertsComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com o nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  alerts: state.content.alerts,
});

export default connect(mapStateToProps, null)(AlertsComponent);
