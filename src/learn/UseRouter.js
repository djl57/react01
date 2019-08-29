import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Inbox = () => {
  return (
    <div>
      <h2>Inbox</h2>
    </div>
  );
};

const name = () => {
  return (
    <div>
      <h2>name</h2>
    </div>
  );
};

const age = () => {
  return (
    <div>
      <h2>age</h2>
    </div>
  );
};

const sex = (props) => {
  const { match } = props;
  console.log(match);
  return (
    <div>
      <h2>sex</h2>
    </div>
  );
};

class About extends React.Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div>
        <h2>About</h2>
        <ul>
          <li>
            <Link to={`${match.url}/name`}>name</Link>
          </li>
          <li>
            <Link to={`${match.url}/age`}>age</Link>
          </li>
          <li>
            <Link to={`${match.url}/sex`}>sex</Link>
          </li>
        </ul>
        <Route path={`${match.path}/name`} component={name} />
        <Route path={`${match.path}/age`} component={age} />
        <Route path={`${match.path}/sex`} component={sex} />
      </div>
    );
  }
}

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          {/* exact 严格匹配，不然/about也会匹配到/ */}
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} />
        </div>
      </Router>
    );
  }
}

export default Routers;
