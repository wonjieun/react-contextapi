import React, { Fragment } from 'react';
import Header from 'components/Header';
import Flex from 'styled-flex-component';
import Notification from 'components/Notification';

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Notification id={1} text={'Hello'} seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;
