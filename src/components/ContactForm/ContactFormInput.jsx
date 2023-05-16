import css from './ContactForm.module.css';

const NAME_PATTERN =
  "^[a-zA-Zа-яА-ЯЇїЄєІі]+(([' -][a-zA-Zа-яА-ЯЇїЄєІі ])?[a-zA-Zа-яА-ЯЇїЄєІі]*)*$";
const TEL_PATTERN =
  '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}';

const CustomInput = props => (
  <input {...props} className={css.input} required />
);

export const ContactFormInput = ({ textLabel, onChange, value }) => {
  const toUpperCaseFirstLetter = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const inputNameType = textLabel === 'name';

  return (
    <label className={css.label}>
      {toUpperCaseFirstLetter(textLabel)}
      <CustomInput
        onChange={onChange}
        value={value}
        className={css.input}
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
