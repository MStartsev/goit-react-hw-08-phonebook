import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import css from './Filter.module.css';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          onChange={onChange}
          type="text"
          placeholder="Enter contact name"
        />
      </label>
    </div>
  );
};

export default ContactsFilter;
