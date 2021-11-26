export interface Iregister {
  email: string;
  password: string;
  phoneNumber: number;
  passwordConfirm: string;
}

export interface Ilogin {
  email: string;
  password: string;
}

export type AllDispatchProp = (arg0: {
  type: string;
  payload: any | void;
}) => void;

export type ActionProps = {
  type: any;
  payload: any | void;
};
