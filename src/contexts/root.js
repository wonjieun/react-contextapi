import React, { Component } from 'react';

const Context = React.createContext();
const { Provider, Consumer: RootConsumer } = Context;

class RootProvider extends Component {
  render() {
    return <div />;
  }
}

export { RootProvider, RootConsumer };
