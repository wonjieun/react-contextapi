import React from 'react';
import { RootConsumer } from 'constexts/root';

const Receives = () => {
  return (
    <RootConsumer>
      {context => <div>default value: {context.state.value}</div>}
    </RootConsumer>
  );
};

export default Receives;
