import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import shortid from 'shortid';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    existingContactsName: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormFill = () => {
    const contactId = shortid.generate();
    const { name, number } = this.state;
    const { existingContactsName } = this.props;
    const reviewExistingContactsNames = existingContactsName.includes(
      name.toLowerCase(),
    );
    const emptyForm = !name || !number;
    const shortContactName = name.length < 3;

    if (reviewExistingContactsNames) {
      return alert(`${name} is already in contacts`);
    }
    if (emptyForm) {
      return alert('Fill the form');
    }
    if (shortContactName) {
      return alert('Name should have more than 3 letters');
    }

    this.props.onSubmit({
      name,
      number,
      id: contactId,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleFormFill();
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.formLabel}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={styles.formInput}
          />
        </label>
        <br />
        <label htmlFor={this.numberInputId} className={styles.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={styles.formInput}
          />
        </label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
