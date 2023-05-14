import {
  useState,
  PropTypes,
  Form,
  Label,
  InputText,
  InputTel,
  FormButton,
  Input,
  css,
} from './exports';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const stateReset = () => {
    setName('');
    setNumber('');
  };

  const onInputChange = e => {
    const { name } = e.currentTarget;
    let { value } = e.currentTarget;

    name === 'number'
      ? setNumber(value.replaceAll(' ', ''))
      : setName(value.trimStart().replaceAll('  ', ' '));
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    stateReset();
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Input onChange={onInputChange} value={name} textValue="name" />
      <Label>
        Name
        <InputText onChange={onInputChange} value={name} />
      </Label>
      <Label>
        Number
        <InputTel onChange={onInputChange} value={number} />
      </Label>
      <FormButton type="submit">Add Contact</FormButton>
    </Form>
  );
};

ContactForm.propTypes = {
  onInputChange: PropTypes.func,
  onAddContact: PropTypes.func,
};

export default ContactForm;
