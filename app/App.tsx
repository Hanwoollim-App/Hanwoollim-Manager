import React from 'react';
import MainNavigator from './components/navigator/MainNavigator';
import {UserInfoProvider} from './utils/context/UserInfoContext';

function App() {
  return (
    <UserInfoProvider>
      <MainNavigator />
    </UserInfoProvider>
  );
}

export default App;
