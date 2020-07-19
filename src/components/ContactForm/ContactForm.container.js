import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import ContactForm from './ContactForm';

const getExistingContactsName = allContacts => {
  return allContacts.map(contact => contact.name.toLowerCase());
};

const mapStateProps = ({ items }) => ({
  existingContactsName: getExistingContactsName(items),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsActions.addContact(data)),
});

export default connect(mapStateProps, mapDispatchToProps)(ContactForm);
