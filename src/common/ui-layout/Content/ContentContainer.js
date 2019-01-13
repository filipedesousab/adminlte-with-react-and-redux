import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from './actions';
import ContentComponent from './ContentComponent';

/**
 * Mapeando estado do redux para a props do ContentComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  contentTitle: state.content.title,
  contentSubtitle: state.content.subtitle,
});

/**
 * Mapeando Action Creators para a props do ContentComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ ...actionCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
