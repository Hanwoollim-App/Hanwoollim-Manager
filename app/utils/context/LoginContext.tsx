/* eslint-disable no-undef */
import React from 'react';

export const LoginContext = React.createContext({});

export const LoginProvider = ({children}: any) => {
  const [property, setProperty] = React.useState('');

  const login = (response: string) => {
    console.log(`loginContext : ${property}`);

    setProperty(response);
  };

  return (
    <LoginContext.Provider value={{property, login}}>
      {children}
    </LoginContext.Provider>
  );
};
