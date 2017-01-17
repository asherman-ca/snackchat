import { connect } from 'react-redux';
import Feed from './feed';
import { requestSnacks } from '../../actions/snack_actions';
import { selectAllSnacks } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  snacks: selectAllSnacks(state).slice().reverse()
});

const mapDispatchToProps = dispatch => ({
  requestSnacks: () => dispatch(requestSnacks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
