import {
  useDispatch,
  useSelector,
  useMemo,
  deleteContact,
  getContacts,
  getFilter,
  ContactListItem,
  css,
} from './exports';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onContactDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

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

export default ContactList;
