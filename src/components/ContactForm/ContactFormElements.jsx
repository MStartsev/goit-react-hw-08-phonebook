import css from './ContactForm.module.css';

export const Form = ({ onSubmit, children }) => (
  <form className={css.form} onSubmit={onSubmit}>
    {children}
  </form>
);

export const Label = ({ children }) => (
  <label className={css.label}>{children}</label>
);

export const FormButton = ({ children }) => (
  <button className={css['form-button']}>{children}</button>
);

const Input = props => <input {...props} className={css.input} required />;

export const InputText = props => (
  <Input
    {...props}
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  />
);

export const InputTel = props => (
  <Input
    {...props}
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  />
);
