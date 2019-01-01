import React, { Fragment } from 'react';
import Header from 'components/Header';
import Flex from 'styled-flex-component';
import Notification from 'components/Notification';
import Store from 'store';

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          console.log(JSON.stringify(store));
          return <Notification id={1} text={'Hello'} seen={false} />;
        }}
      </Store.Consumer>
    </Flex>
  </Fragment>
);

export default AppPresenter;
