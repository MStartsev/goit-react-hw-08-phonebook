import { ContactForm, ContactList, Filter, css } from './exports';

export default function App() {
  return (
    <section className={css['phonebook']}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
}
