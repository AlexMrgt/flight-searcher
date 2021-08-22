import { RootState } from "../reducers/index";
import {name} from '../actions/flights';

const getFlights = (state:RootState) => state[name].data;
const getIsFlightsLoading = (state: RootState)=> state[name].loading;
const getFlightsLoadError = (state: RootState) => state[name].loadingError;

export {
  getFlights,
  getIsFlightsLoading,
  getFlightsLoadError
}
