import {
  Component,
  nanoid,
  contactsTest,
  ContactForm,
  ContactList,
  Filter,
  Container,
  Title,
  SubTitle,
} from 'components/App/exports';

class App extends Component {
  state = {
    contacts: contactsTest,
    filter: '',
  };

  componentDidMount() {
    const localСontacts = localStorage.getItem('contacts');

    localСontacts
      ? this.setState({ contacts: JSON.parse(localСontacts) })
      : this.saveСontacts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      this.saveСontacts();
    }
  }

  saveСontacts() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  changeFilter = e => this.setState({ filter: e.currentTarget.value });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onAddContact = value => {
    const { contacts } = this.state;
    const { name, number } = value;

    if (name && number) {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      const isContactExist = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContactExist) return alert(`${name} is already in contacts`);

      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onAddContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          getFilteredContacts={this.getFilteredContacts}
          onContactDelete={this.onContactDelete}
        />
      </Container>
    );
  }
}

export default App;
