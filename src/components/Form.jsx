import { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({
      value: "",
    });
  };

  onChange = (event) => {
    const value = event.target.value;

    this.setState({
      value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="number"
          name="balance"
          placeholder="Сума"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button>Зберегти</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
