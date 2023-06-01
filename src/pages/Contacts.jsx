import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import css from './pages.module.css';

const Contacts = () => (
  <>
    <ContactForm />
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      <ContactsFilter />
      <ContactList />
    </div>
  </>
);

export default Contacts;
