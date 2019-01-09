import { connect } from 'react-redux';

import Breadcrumb from '../components/Breadcrumb';

const mapStateToProps = state => ({
  breadcrumb: state.content.breadcrumb,
});

export default connect(mapStateToProps, null)(Breadcrumb);
