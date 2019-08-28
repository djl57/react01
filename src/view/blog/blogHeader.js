import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

class BlogHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curNavIdx: 0
    };
  }
  goto(to, index) {
    this.setState({
      curNavIdx: index
    });
    const { history } = this.props;
    history.push(to);
  }
  render() {
    const navLists = [
      { id: 0, navName: "首页", to: "/" },
      { id: 1, navName: "博客", to: "/blog" }
    ];
    const listItem = navLists.map((item, index) => (
      <li
        key={item.id}
        onClick={() => this.goto(item.to, index)}
        className={`nav-list ${
          index === this.state.curNavIdx ? "nav-list-active" : ""
        }`}
      >
        {item.navName}
      </li>
    ));
    return (
      <div className="blog-header">
        <ul className="nav-lists">{listItem}</ul>
      </div>
    );
  }
}
const Head = withRouter(BlogHeader);
const BlogHeaderWithRouter = () => {
  return (
    <Router>
      <Head />
    </Router>
  );
};

export default BlogHeaderWithRouter;
