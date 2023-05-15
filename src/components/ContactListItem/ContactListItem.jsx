import css from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onContactDelete }) => (
  <li className={css.item}>
    <p className={css.text}>
      {name}: {number}
    </p>
    <button className={css.button} type="button" onClick={onContactDelete}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
