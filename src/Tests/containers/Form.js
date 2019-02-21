import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addAlert, addAlertPopup } from '../../common/ui-layout/Alerts';
import * as actionCreators from '../actions';
import FormComponent from '../components/Form';

/**
 * Mapeando estado do redux para a props do FormComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  abas: state.tests.abas,
});

/**
 * Mapeando Action Creators para a props do FormComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ ...actionCreators, addAlert, addAlertPopup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
