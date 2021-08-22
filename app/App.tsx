import React from 'react';
import MainNavigator from './components/navigator/MainNavigator';
import {LoginProvider} from './utils/context/LoginContext';

function App() {
  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
  );
}

export default App;
