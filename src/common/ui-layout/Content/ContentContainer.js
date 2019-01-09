import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeTitle,
  changeSubtitle,
  changeBreadcrumb,
} from './actions';
import ContentComponent from './ContentComponent';

const mapStateToProps = state => ({
  contentTitle: state.content.title,
  contentSubtitle: state.content.subtitle,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTitle,
  changeSubtitle,
  changeBreadcrumb,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
