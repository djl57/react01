import React from "react";

const About = () => {
  return (
    <div>it is about</div>
  )
};
const Inbox = () => {
  return (
    <div>it is Inbox</div>
  )
};
const Home = () => {
  return (
    <div>it is Home</div>
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      console.log(window.location.hash.substr(1))
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    let Child;
    switch (this.state.route) {
      case "/about":
        Child = About;
        break;
      case "/inbox":
        Child = Inbox;
        break;
      default:
        Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <a href="#/about">About</a>
          </li>
          <li>
            <a href="#/inbox">Inbox</a>
          </li>
        </ul>
        <Child />
      </div>
    );
  }
}

export default App;
