import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import { getExistingContactsName } from '../../redux/contact-selectors';
import ContactForm from './ContactForm';


const mapStateProps = ({ items }) => ({
  existingContactsName: getExistingContactsName(items),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsActions.addContact(data)),
});

export default connect(mapStateProps, mapDispatchToProps)(ContactForm);
