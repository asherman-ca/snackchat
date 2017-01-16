import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ snacks, session }) => ({
  // username: session.currentUser.username,
  snacks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
