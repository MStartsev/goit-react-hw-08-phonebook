import css from './ContactForm.module.css';

const NAME_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const TEL_PATTERN =
  '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}';

const CustomInput = props => (
  <input {...props} className={css.input} required />
);

export const ContactFormInput = props => {
  const toUpperCaseFirstLetter = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const inputNameType = props.textLabel === 'name';

  return (
    <label className={css.label}>
      {toUpperCaseFirstLetter(props.textLabel)}
      <CustomInput
        onChange={props.onChange}
        value={props.value}
        className={props.className}
        type={inputNameType ? 'text' : 'tel'}
        name={inputNameType ? 'name' : 'number'}
        pattern={inputNameType ? `${NAME_PATTERN}` : `${TEL_PATTERN}`}
        title={
          inputNameType
            ? "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            : 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        }
      />
    </label>
  );
};
