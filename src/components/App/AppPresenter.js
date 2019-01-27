import React from 'react';
import Header from 'components/Header';
import Flex from 'styled-flex-component';
import Notification from 'components/Notification';
import Store from 'store';
import { RootProvider } from 'contexts/root';

const AppPresenter = () => (
  <>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          console.log(JSON.stringify(store));
          return <Notification id={1} text={'Hello'} seen={false} />;
        }}
      </Store.Consumer>
    </Flex>
    <RootProvider>
      <div className="panes">
        <h2>RootProvider</h2>
      </div>
    </RootProvider>
  </>
);

export default AppPresenter;
