import { connect } from 'react-redux';
import SnackShow from './snack_show';
import { deleteSnack, fetchSnack, fetchSnackRatings }
  from '../../actions/snack_actions';
import { selectAllRatings } from '../../reducers/selectors';
// import { fetchRatings, deleteRating }
//   from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  snack: state.snacks[ownProps.params.snackId],
  ratings: selectAllRatings(state).slice().reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchSnack: params => dispatch(fetchSnack(params)),
  deleteSnack: id => dispatch(deleteSnack(id)),
  fetchSnackRatings: params => dispatch(fetchSnackRatings(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackShow);
