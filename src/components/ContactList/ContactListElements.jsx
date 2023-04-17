import css from './ContactList.module.css';

export const ContactListContainer = ({ children }) => (
  <div className={css['list-container']}>{children}</div>
);

export const ContactsList = ({ children }) => (
  <ul className={css.list}>{children}</ul>
);

export const ContactNotification = ({ children }) => <p>{children}</p>;
