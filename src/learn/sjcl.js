import React from "react";

class Sjcl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "admin",
      password: "123456"
    };
  }
  setName(e) {
    this.setState({
      name: e.target.value
    })
  }
  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  submit() {
    alert(`提交的姓名是：${this.state.name},密码是${this.state.password}`)
  }
  render() {
    return (
      <div>
        姓名：
        <input
          type="text"
          defaultValue={this.state.name}
          onChange={e => this.setName(e)}
        />
        密码：
        <input
          type="text"
          defaultValue={this.state.password}
          onChange={e => this.setPassword(e)}
        />
        <input type="button" value="提交" onClick={() => this.submit()}/>
      </div>
    );
  }
}

export default Sjcl;
