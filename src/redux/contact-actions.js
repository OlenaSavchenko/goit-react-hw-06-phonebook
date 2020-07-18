import types from './contact-types';

const addContact = data => ({
  type: types.ADD_CONTACT,
  payload: data,
});

const deleteContact = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default {
  addContact,
  deleteContact,
  changeFilter,
};
