import { connect } from 'react-redux';

import BreadcrumbComponent from '../components/Breadcrumb';

/**
 * Mapeando estado do redux para a props do AlertsComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com o nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  breadcrumb: state.content.breadcrumb,
});

export default connect(mapStateToProps, null)(BreadcrumbComponent);
