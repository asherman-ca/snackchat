import { connect } from 'react-redux';
import SnacksIndex from './snacks_index';
import { requestSnacks, requestUserSnacks } from '../../actions/snack_actions';
import { selectAllSnacks } from '../../reducers/selectors';

const mapStateToProps = (state, { routeParams } ) => ({
  snacks: selectAllSnacks(state).slice().reverse(),
  id: routeParams.userId
});

const mapDispatchToProps = dispatch => ({
  requestUserSnacks: (id) => dispatch(requestUserSnacks(id))
    // requestSnacks: () => dispatch(requestSnacks())
});

export default connect(mapStateToProps, mapDispatchToProps)(SnacksIndex);
