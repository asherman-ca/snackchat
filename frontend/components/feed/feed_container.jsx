import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
