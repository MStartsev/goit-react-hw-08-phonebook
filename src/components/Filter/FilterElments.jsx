import css from './Filter.module.css';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export const Label = ({ children }) => (
  <label className={css.label}>{children}</label>
);

export const InputText = props => (
  <input {...props} type="text" placeholder="Enter name" />
);
