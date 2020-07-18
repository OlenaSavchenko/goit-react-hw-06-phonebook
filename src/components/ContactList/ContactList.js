import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import ContactlistItem from '../ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, ...contact }) => {
        return (
          <ContactlistItem
            key={id}
            contact={contact}
            onDeleteContact={() => deleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

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
