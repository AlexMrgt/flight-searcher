import { AuthActionsTypes, authActionTypesEnum } from "../actions/actionCreatrorsTypes/authActionCreatorsTypes"

interface AuthState {
  email: string | null,
}

const initialState: AuthState = {
  email: null,
}

const authReducer = (state: AuthState = initialState, action: AuthActionsTypes): AuthState => {
  switch (action.type) {

    case authActionTypesEnum.LOG_IN: {
      localStorage.setItem('login', action.payload);

      return {
        ...state,
        email: action.payload,
      }
    }

    case authActionTypesEnum.LOG_OUT: {
      localStorage.removeItem('login');

      return {
        ...state,
        email:null,
      }
    }

    default:
      return {
        ...state,
      }
  }
}

export {

}

export default authReducer;
