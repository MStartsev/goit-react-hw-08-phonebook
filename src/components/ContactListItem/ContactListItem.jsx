import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ name, phone, onContactDelete }) => (
  <li className={css.item}>
    <p className={css.text}>
      {name}: {phone}
    </p>
    <button className={css.button} type="button" onClick={onContactDelete}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
