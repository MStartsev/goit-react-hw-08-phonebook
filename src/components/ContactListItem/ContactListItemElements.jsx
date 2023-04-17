import css from './ContactListItem.module.css';

export const ContactItem = ({ children }) => (
  <li className={css.item}>{children}</li>
);

export const ContactText = ({ children }) => (
  <p className={css.text}>{children}</p>
);

export const ButtonDeleteContact = ({ onClick, children }) => (
  <button className={css.button} type="button" onClick={onClick}>
    {children}
  </button>
);
