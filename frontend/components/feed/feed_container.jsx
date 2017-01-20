import { connect } from 'react-redux';
import Feed from './feed';
import { requestSnacks, removeSnacks } from '../../actions/snack_actions';
import { selectAllSnacks } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  snacks: selectAllSnacks(state).slice().reverse()
});

const mapDispatchToProps = dispatch => ({
  requestSnacks: () => dispatch(requestSnacks()),
  removeSnacks: () => dispatch(removeSnacks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
