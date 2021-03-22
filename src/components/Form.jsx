import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state, this.props);
    this.props.onChange(this.state.value);
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

export default Form;
