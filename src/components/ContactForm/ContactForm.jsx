import {
  useDispatch,
  useSelector,
  useState,
  addContact,
  selectContacts,
  ContactFormInput,
  css,
} from './exports';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const stateReset = () => {
    setName('');
    setPhone('');
  };

  const onInputChange = e => {
    const { name } = e.currentTarget;
    let { value } = e.currentTarget;

    name === 'phone'
      ? setPhone(
          value.replaceAll(
            /[a-zA-Zа-яА-ЯЇїЄєІі'`" =!№@#$%^&*/[\],?;:.\\{}]/g,
            ''
          )
        )
      : setName(
          value
            .trimStart()
            .replaceAll('  ', ' ')
            .replaceAll(/[0-9`'"=+!№@#$%^&*/[\],?;:.\\{}]/g, '')
        );
  };

  const includesContact = () =>
    contacts.some(contact => {
      if (contact.name.toLowerCase().includes(name.toLowerCase())) {
        alert(`${name} is already in contacts.`);
        return true;
      }

      if (contact.phone.includes(phone)) {
        alert(`${phone} is already in contacts.`);
        return true;
      }

      return false;
    });

  const onHandleSubmit = e => {
    e.preventDefault();

    if (includesContact()) return;

    dispatch(
      addContact({
        name,
        phone,
      })
    );

    stateReset();
  };

  return (
    <form className={css.form} onSubmit={onHandleSubmit}>
      <ContactFormInput
        onChange={onInputChange}
        value={name}
        textLabel="name"
      />

      <ContactFormInput
        onChange={onInputChange}
        value={phone}
        textLabel="phone"
      />

      <button className={css['form-button']} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
