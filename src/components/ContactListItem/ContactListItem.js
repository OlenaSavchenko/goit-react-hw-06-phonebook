import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;

  return (
    <li className={styles.item}>
      <span>{name}:</span>
      <span> {number}</span>
      <button type="button" onClick={onDeleteContact} className={styles.btn}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
