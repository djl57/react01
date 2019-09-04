import React, { Component } from "react";

class Smzq extends Component {
  componentWillMount() {
    console.log("------组件挂载:组件被渲染到 DOM 中前------");
  }
  componentDidMount() {
    console.log("------组件挂载:组件已经被渲染到 DOM 中------");
  }
  componentWillUnmount() {
    console.log("------组件卸载------");
  }
  render() {
    return <div>生命周期</div>;
  }
}

export default Smzq;
