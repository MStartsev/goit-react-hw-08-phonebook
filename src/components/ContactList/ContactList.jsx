import {
  PropTypes,
  ContactListItem,
  ContactListContainer,
  ContactsList,
  ContactNotification,
} from './exports';

const ContactList = ({ contacts, onContactDelete, getFilteredContacts }) => {
  const filteredContacts = getFilteredContacts();

  return (
    <ContactListContainer>
      {contacts.length ? (
        <ContactsList>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onContactDelete={() => onContactDelete(id)}
            />
          ))}
        </ContactsList>
      ) : (
        <ContactNotification>
          You don't have any contacts in your phonebook
        </ContactNotification>
      )}
    </ContactListContainer>
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
