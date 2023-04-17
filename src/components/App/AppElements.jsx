import css from './App.module.css';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export const Title = ({ children }) => (
  <h1 className={css.title}>{children}</h1>
);

export const SubTitle = ({ children }) => (
  <h2 className={css.subtitle}>{children}</h2>
);
