import { connect } from 'react-redux';

import Alerts from '../components/Alerts';

const mapStateToProps = state => ({
  alerts: state.content.alerts,
});

export default connect(mapStateToProps, null)(Alerts);
