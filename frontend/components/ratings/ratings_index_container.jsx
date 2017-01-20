import { connect } from 'react-redux';
import RatingsIndex from './ratings_index';
import { requestRatings, removeRatings } from '../../actions/rating_actions';
import { selectAllRatings } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  ratings: selectAllRatings(state).slice().reverse()
});

const mapDispatchToProps = dispatch => ({
  requestRatings: () => dispatch(requestRatings()),
  removeRatings: () => dispatch(removeRatings())
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingsIndex);
