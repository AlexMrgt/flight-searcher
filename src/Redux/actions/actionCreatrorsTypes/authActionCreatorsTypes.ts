export enum authActionTypesEnum {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

export interface LoginActionType{
  type: typeof authActionTypesEnum.LOG_IN
  payload: string,
}

export interface LogoutActionType{
  type: typeof authActionTypesEnum.LOG_OUT
}

export type AuthActionsTypes =
  | LoginActionType
  | LogoutActionType

