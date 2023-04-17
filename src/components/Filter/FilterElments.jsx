import css from './Filter.module.css';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export const Label = ({ children }) => (
  <label className={css.label}>{children}</label>
);

export const InputText = ({ onChange, value }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Enter name"
  />
);
