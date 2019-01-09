import { connect } from 'react-redux';

import Menu from '../Components/Menu';

const mapStateToProps = state => ({
  items: state.sidebar.menu,
});

export default connect(mapStateToProps, null)(Menu);
