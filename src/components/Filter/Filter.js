import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contact-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <h3 className={styles.title}>Find contacts by name</h3>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchProps)(Filter);
