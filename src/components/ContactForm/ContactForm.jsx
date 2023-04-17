import {
  Component,
  PropTypes,
  Form,
  Label,
  InputText,
  InputTel,
  FormButton,
} from './exports';

class ContactForm extends Component {
  state = { name: '', number: '' };

  stateReset = () => {
    this.setState({ name: '', number: '' });
  };

  onInputChange = e => {
    const { name } = e.currentTarget;
    let { value } = e.currentTarget;

    if (name === 'number') value = value.replaceAll(' ', '');
    this.setState({ [name]: value.trimStart().replaceAll('  ', ' ') });
    console.log(name, value);
  };

  onHandleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.stateReset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label>
          Name
          <InputText onChange={this.onInputChange} value={name} />
        </Label>
        <Label>
          Number
          <InputTel onChange={this.onInputChange} value={number} />
        </Label>
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onInputChange: PropTypes.func,
  onAddContact: PropTypes.func,
};

export default ContactForm;
