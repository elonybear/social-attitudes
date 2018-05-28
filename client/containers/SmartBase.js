import {connect} from 'react-redux';

import Base from '../components/Base';

function mapStateToProps (state) {
  return {
    message: state.data.message
  } 
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Base);
