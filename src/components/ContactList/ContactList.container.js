import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateProps = ({ items, filter }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchProps = dispatch => ({
  deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateProps, mapDispatchProps)(ContactList);
