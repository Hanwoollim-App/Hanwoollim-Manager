interface loginInterface {
  token: Array<string | Function | any>;
  profile: Array<string | Function | any>;
}

export interface SignInInterface {
  id?: string;
  pw?: string;
}

export default loginInterface;
