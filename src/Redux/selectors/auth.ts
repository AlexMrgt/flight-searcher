import { RootState } from "../reducers/index";
import {name} from '../actions/auth';

const isLoggedIn = (state:RootState) => !!state[name].email;


export {
  isLoggedIn
}
