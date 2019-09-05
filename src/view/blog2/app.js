import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { setToken, getToken, removeToken } from "../../utils/cookie";

const Public = () => {
  return <div>public</div>;
};

const Protected = () => {
  return <div>protected</div>;
};

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          getToken() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }
  login = () => {
    setToken("token");
    this.setState({
      redirectToReferrer: true
    });
  };
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        <p>请先登录{from.pathname}</p>
        <input type="button" value="登录" onClick={this.login} />
      </div>
    );
  }
}

class Auth extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        {getToken() ? (
          <p>
            Welcome!{" "}
            <button
              onClick={() => {
                removeToken();
                history.push("/");
              }}
            >
              Sign out
            </button>
          </p>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    );
  }
}

const AuthButton = withRouter(Auth);

class AuthExample extends React.Component {
  render() {
    const items = [{ path: "/public", name: "Public Page" }, { path: "/protected", name: "Protected Page" }];
    const item = items.map(i => (
      <li key={i.path}>
        <Link to={i.path}>{i.name}</Link>
      </li>
    ));
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>{item}</ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default AuthExample;
