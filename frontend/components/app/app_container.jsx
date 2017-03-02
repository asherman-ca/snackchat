import { connect } from 'react-redux';
import App from './app';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ( store ) => ({
  snacks: store.snacks,
  loggedIn: Boolean(store.session.currentUser),
  user: store.session.currentUser,
  errors: store.session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
