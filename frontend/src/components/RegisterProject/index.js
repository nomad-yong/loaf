import { connect } from 'react-redux';
import Container from './container';
import { actionCreators  as userActions } from '../../redux/modules/projects';

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        createProject: (file, title, caption, max_member, schedule,  tags) => {
            dispatch(userActions.createProject(file, title, caption, max_member,schedule, tags))
            
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);