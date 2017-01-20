import { connect } from 'react-redux';
import SnackShow from './snack_show';
import { deleteSnack, fetchSnack, requestSnacks } from '../../actions/snack_actions';
import { requestSnackRatings, addRating, removeRatings } from '../../actions/rating_actions';
import { selectAllRatings } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  snack: state.snacks[ownProps.params.snackId],
  ratings: selectAllRatings(state).slice().reverse()
});

const mapDispatchToProps = dispatch => ({
  // fetchSnack: params => dispatch(fetchSnack(params)),
  requestSnacks: () => dispatch(requestSnacks()),
  deleteSnack: id => dispatch(deleteSnack(id)),
  requestSnackRatings: params => dispatch(requestSnackRatings(params)),
  addRating: rating => dispatch(addRating(rating)),
  removeRatings: () => dispatch(removeRatings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackShow);
