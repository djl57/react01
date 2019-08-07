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
    this.state = {
      temperature: "",
      scale: ""
    };
  }
  handleCChange(val) {
    this.setState({
      temperature: val,
      scale: "c"
    });
  }
  handleFChange(val) {
    this.setState({
      temperature: val,
      scale: "f"
    });
  }
  render() {
    const temperature = this.state.temperature;
    const celsius =
      this.state.scale === "f" ? tryConvert(temperature, toC) : temperature;
    const fahrenheit =
      this.state.scale === "c" ? tryConvert(temperature, toF) : temperature;
    return (
      <div>
        <TemplateInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={val => this.handleCChange(val)}
        />
        <TemplateInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={val => this.handleFChange(val)}
        />
        <BoilingText celsius={celsius}></BoilingText>
      </div>
    );
  }
}

export default StateUp;
