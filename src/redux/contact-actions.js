import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');

export default {
  addContact,
  deleteContact,
  changeFilter,
};
