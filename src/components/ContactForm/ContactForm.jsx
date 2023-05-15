import { useState, PropTypes, ContactFormInput, css } from './exports';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const onHandleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
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
        value={number}
        textLabel="number"
      />

      <button className={css['form-button']} type="submit">
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onInputChange: PropTypes.func,
  onAddContact: PropTypes.func,
};

export default ContactForm;
