import React from "react";

const Login = () => <div>登录状态</div>;
const Logout = () => <div>登出状态</div>;

const IsLogin = props => {
  if (props.loginStatus === 1) {
    return <Login />;
  }
  return <Logout />;
};
class LoginPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <input type="button" value="登录" onClick={() => this.handelLogin()} />
    )
  }
}
class LogoutPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <input type="button" value="登出" onClick={() => this.handelLogout()} />
    )
  }
}
const IsLoginPage = props => {
  if (props.loginStatus === 1) {
    return <LoginPage />;
  }
  return <LogoutPage />;
};

class IfFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 0
    };
  }
  render() {
    return (
      <div>
        <IsLogin loginStatus={this.state.loginStatus} />
        <IsLoginPage loginStatus={this.state.loginStatus}/>
      </div>
    );
  }
}

export default IfFor;
