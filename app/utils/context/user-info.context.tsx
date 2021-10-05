/* eslint-disable no-undef */
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type IUserInfo = {
  userName: string;
  major: string;
  studentId: number;
  position: string;
};

type IUserInfoContext = {
  user: IUserInfo;
  setUser: (value: SetStateAction<IUserInfo>) => void;
};

type IUserInfoContextProps = {
  children: ReactNode;
};

export const UserInfoContext = createContext<IUserInfoContext | null>(null);

export const UserInfoProvider = ({children}: IUserInfoContextProps) => {
  const [user, setUser] = useState<IUserInfo>({
    userName: '',
    major: '',
    studentId: -1,
    position: '',
  });

  return (
    <UserInfoContext.Provider value={{user, setUser}}>
      {children}
    </UserInfoContext.Provider>
  );
};

const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error('useUserInfo must be used within a UserInfoContext');
  }

  return context;
};

export const useUserInfo = () => {
  const {user, setUser} = useUserInfoContext();

  return {
    user,
    setUser,
  };
};
