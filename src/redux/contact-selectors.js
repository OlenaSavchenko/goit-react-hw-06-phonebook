export const getExistingContactsName = allContacts => {
  return allContacts.map(contact => contact.name.toLowerCase());
};

export const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};
