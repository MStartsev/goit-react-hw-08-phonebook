import {
  useDispatch,
  useState,
  addContact,
  useSelectors,
  ContactFormInput,
  css,
} from './exports';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const { contacts } = useSelectors();

  const stateReset = () => {
    setName('');
    setNumber('');
  };

  const onInputChange = e => {
    const { name } = e.currentTarget;
    let { value } = e.currentTarget;

    name === 'number'
      ? setNumber(
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

      if (contact.number.includes(number)) {
        alert(`${number} is already in contacts.`);
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
        number,
      })
    );

    stateReset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>New Contact</h2>
      <form className={css.form} onSubmit={onHandleSubmit}>
        <ContactFormInput
          onChange={onInputChange}
          value={name}
          textLabel="name"
        />

        <ContactFormInput
          onChange={onInputChange}
          value={number}
          textLabel="number"
        />

        <button className={css['form-button']} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
