import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import Greeting from './greeting';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);