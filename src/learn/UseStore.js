import React from "react";

class UseStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: React.store.getState().name,
      age: React.store.getState().age
    };
  }
  async changeName(e) {
    const target = e.target;
    await React.store.dispatch({
      type: 'changeName',
      name: target.value
    })
    this.setState({
      name: React.store.getState().name
    })
  }
  render() {
    return(
      <div>
        <input type="text" value={this.state.name} onChange={e => this.changeName(e)}/>
      </div>
    );
  }
}

export default UseStore;
