import {
  useEffect,
  fetchContacts,
  useDispatch,
  useSelectors,
  useMemo,
  deleteContact,
  ContactListItem,
  css,
} from './exports';

const ContactList = () => {
  const { contacts, filter, isLoggedIn, isLoading, error } = useSelectors();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    isLoggedIn && (
      <div className={css['list-container']}>
        {isLoading && !error && <p>Loading contact list...</p>}
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
          !isLoading &&
          !error && <p>You don't have any contacts in your numberbook</p>
        )}
      </div>
    )
  );
};

export default ContactList;
