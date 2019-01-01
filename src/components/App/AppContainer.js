import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._changeMessage = () => {
      if (this.state.message === 'Hello') {
        this.setState({
          message: 'Bye bye'
        });
      } else {
        this.setState({
          message: 'Hello'
        });
      }
    };
    this.state = {
      message: 'Hello',
      stuff: 10,
      changeMessage: this._changeMessage,
      notifications: {
        '1': {
          id: 1,
          text: 'Something',
          seen: false
        },
        '2': {
          id: 2,
          text: 'Something else',
          seen: false
        },
        '3': {
          id: 3,
          text: 'Something else but different',
          seen: false
        }
      }
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: 'Passed 2 second'
      });
    }, 2000);
  };
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
