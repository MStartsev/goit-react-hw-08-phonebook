import { PropTypes, Container, Label, InputText } from './exports';

const Filter = ({ value, onChange }) => (
  <Container>
    <Label>
      Find contacts by name
      <InputText value={value} onChange={onChange} />
    </Label>
  </Container>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
