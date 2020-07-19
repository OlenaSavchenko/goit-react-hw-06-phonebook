import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchProps)(Filter);
