import React from "react";

const BoilingText = props => {
  if (props.celsius >= 100) {
    return <p>水沸腾了</p>;
  } else {
    return <p>水还没沸腾</p>;
  }
};

const toC = fahrenheit => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toF = celsius => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, fun) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = fun(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

class TemplateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ""
    };
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const text = {
      c: "摄氏度",
      f: "华氏度"
    };
    return (
      <fieldset>
        <legend>输入{text[this.props.scale]}</legend>
        <input
          type="text"
          value={this.props.temperature}
          onChange={e => this.handleChange(e)}
        />
      </fieldset>
    );
  }
}

class StateUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TemplateInput scale="c" />
        <TemplateInput scale="f" />
      </div>
    );
  }
}

export default StateUp;
