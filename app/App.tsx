import React from 'react';
import {RootNavigator} from './components/navigator';
import {UserInfoProvider} from './utils/context/user-info.context';

function App() {
  return (
    <UserInfoProvider>
      <RootNavigator />
    </UserInfoProvider>
  );
}

export default App;
