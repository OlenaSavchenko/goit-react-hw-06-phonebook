import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import { getVisibleContacts } from '../../redux/contact-selectors';
import ContactList from './ContactList';

const mapStateProps = ({ items, filter }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchProps = dispatch => ({
  deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateProps, mapDispatchProps)(ContactList);
