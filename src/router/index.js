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

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};
// class About extends React.Component {
//   render() {
//     // console.log(this.props.match);
//     return (
//       <div>
//         about
//       </div>
//     )
//   }
// }

class Routers extends React.Component {
  constructor(props) {
    super(props);
  }
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
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} />
        </div>
      </Router>
    );
  }
}

export default Routers;
