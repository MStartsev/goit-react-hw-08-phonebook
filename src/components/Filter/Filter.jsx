import { Component, PropTypes, Container, Label, InputText } from './exports';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Container>
        <Label>
          Find contacts by name
          <InputText value={value} onChange={onChange} />
        </Label>
      </Container>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
