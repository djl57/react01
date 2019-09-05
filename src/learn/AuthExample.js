import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

const Public = () => {
  return <div>public</div>;
};

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Protected = () => {
  return <div>protected</div>;
};

class PrivateRoute extends React.Component {
  render() {
    console.log("PrivateRoute");
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated ? (
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
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  };
  render() {
    // console.log(this.props);
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    // console.log(from);
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
    // console.log(history);
    return (
      <div>
        {fakeAuth.isAuthenticated ? (
          <p>
            Welcome!{" "}
            <button
              onClick={() => {
                fakeAuth.signout(() => history.push("/"));
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
    console.log("AuthExample");
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default AuthExample;
