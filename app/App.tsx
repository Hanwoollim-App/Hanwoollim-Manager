import React from 'react';
import {RootNavigator} from './components/navigator';
import {UserInfoProvider} from './utils/context/UserInfoContext';

function App() {
  return (
    <UserInfoProvider>
      <RootNavigator />
    </UserInfoProvider>
  );
}

export default App;
