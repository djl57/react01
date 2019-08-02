import React from "react";

const Login = () => <div>登录状态</div>;
const Logout = () => <div>登出状态</div>;

const IsLogin = props => {
  if (props.loginStatus === 1) {
    return <Login />;
  }
  return <Logout />;
};

class For extends React.Component {
  render() {
    const list = [
      { id: 1, value: "list1" },
      { id: 2, value: "list2" },
      { id: 3, value: "list3" },
      { id: 4, value: "list4" },
    ];
    const listItem = list.map(item => <li key={item.id}>{item.value}</li>);
    return <ul>{listItem}</ul>;
  }
}

class IfFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 0
    };
  }
  handelLoginClick() {
    this.setState({ loginStatus: 1 });
  }
  handleLogoutClick() {
    this.setState({ loginStatus: 0 });
  }
  render() {
    const loginStatus = this.state.loginStatus;
    let btn;
    if (loginStatus === 0) {
      btn = (
        <input
          type="button"
          value="登录"
          onClick={() => this.handelLoginClick()}
        />
      );
    } else {
      btn = (
        <input
          type="button"
          value="登出"
          onClick={() => this.handleLogoutClick()}
        />
      );
    }
    let res = [1, 2];
    return (
      <div>
        <IsLogin loginStatus={this.state.loginStatus} />
        {btn}
        {res.length > 0 && <p>正在使用 与运算符</p>}
        该用户已{this.state.loginStatus ? "登录" : "登出"}
        <For />
      </div>
    );
  }
}

export default IfFor;
