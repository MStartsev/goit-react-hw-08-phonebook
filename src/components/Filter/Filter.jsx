import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={css.container}>
    <label className={css.label}>
      Find contacts by name
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Enter name"
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
