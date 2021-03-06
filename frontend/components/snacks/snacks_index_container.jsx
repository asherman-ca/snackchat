import { connect } from 'react-redux';
import SnacksIndex from './snacks_index';
import { requestSnacks, requestUserSnacks, removeSnacks } from '../../actions/snack_actions';
import { selectAllSnacks } from '../../reducers/selectors';

const mapStateToProps = (state, { routeParams } ) => ({
  snacks: selectAllSnacks(state).slice().reverse(),
  id: routeParams.userId
});

const mapDispatchToProps = dispatch => ({
  requestUserSnacks: (id) => dispatch(requestUserSnacks(id)),
  removeSnacks: () => dispatch(removeSnacks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnacksIndex);


// const mapStateToProps = (state, ownProps ) =>
// { console.log(ownProps);
// return {
//   snacks: selectAllSnacks(state).slice().reverse(),
//   id: ownProps.routeParams.userId
// };
// };
