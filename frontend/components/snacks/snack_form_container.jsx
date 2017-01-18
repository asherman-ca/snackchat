import { connect } from 'react-redux';
import SnackForm from './snack_form.jsx';
import { addSnack } from '../../actions/snack_actions';

const mapStateToProps = ({ errors, currentUser }) => ({
  errors: errors,
  user: currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    addSnack: snack => dispatch(addSnack(snack))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackForm);
