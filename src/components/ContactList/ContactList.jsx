import {
  useEffect,
  fetchContacts,
  useDispatch,
  useSelector,
  useMemo,
  selectIsLoading,
  selectError,
  deleteContact,
  selectContacts,
  selectFilter,
  ContactListItem,
  css,
} from './exports';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
    <div className={css['list-container']}>
      {isLoading && !error && <p>Loading contact list...</p>}
      {contacts.length ? (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              name={name}
              phone={phone}
              onContactDelete={() => onContactDelete(id)}
            />
          ))}
        </ul>
      ) : (
        !isLoading &&
        !error && <p>You don't have any contacts in your phonebook</p>
      )}
    </div>
  );
};

export default ContactList;
