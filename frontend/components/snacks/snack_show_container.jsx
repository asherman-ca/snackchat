import { connect } from 'react-redux';
import SnackShow from './snack_show';
import { deleteSnack, fetchSnack }
  from '../../actions/snack_actions';
// import { fetchRatings, deleteRating }
//   from '../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => ({
  snack: state.snacks[ownProps.params.snackId]
});

const mapDispatchToProps = dispatch => ({
  fetchSnack: params => dispatch(fetchSnack(params)),
  deleteSnack: id => dispatch(deleteSnack(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackShow);
