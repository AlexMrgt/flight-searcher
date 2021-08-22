import {
  authActionTypesEnum,
  LoginActionType,
  LogoutActionType,
} from "./actionCreatrorsTypes/authActionCreatorsTypes";

export const name = 'auth';

export const loginUser = (authData: string): LoginActionType => ({
  type: authActionTypesEnum.LOG_IN,
  payload: authData,
});

export const logoutUser = (): LogoutActionType => ({
  type: authActionTypesEnum.LOG_OUT,
});
