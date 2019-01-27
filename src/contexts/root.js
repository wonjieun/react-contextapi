import React, { Component } from 'react';

const Context = React.createContext();
const { Provider, Consumer: RootConsumer } = Context;

class RootProvider extends Component {
  state = {
    value: 'myRoot'
  };

  actions = {
    setValue: value => {
      this.setState({ value });
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { RootProvider, RootConsumer };
