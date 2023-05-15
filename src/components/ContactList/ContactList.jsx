import { PropTypes, ContactListItem, css } from './exports';

const ContactList = ({ contacts, onContactDelete, getFilteredContacts }) => {
  const filteredContacts = getFilteredContacts();

  return (
    <div className={css['list-container']}>
      {contacts.length ? (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onContactDelete={() => onContactDelete(id)}
            />
          ))}
        </ul>
      ) : (
        <p>You don't have any contacts in your phonebook</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  getFilteredContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
