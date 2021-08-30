import { ParsedFlight } from '../../utils/interfaces/flightInterfaces';
import { FlightsActionsTypes,flightsActionTypesEnum } from "../actions/actionCreatrorsTypes/flightsActionCreatorsTypes";
import { FlightData } from "../../utils/interfaces/flightInterfaces";
import { parseFlights } from "../../utils/utils";


interface FlightsState {
  rawData: FlightData | null,
  data: ParsedFlight[] | null,

  loading: boolean,
  loadingError: string | null,
}

const initialState: FlightsState = {
  rawData: null,
  data: [],

  loading: false,
  loadingError: null,
}

const flightsReducer = (state: FlightsState = initialState, action: FlightsActionsTypes): FlightsState => {
  switch (action.type) {

    case flightsActionTypesEnum.SET_FLIGHTS: {
      return {
        ...state,
        loading: false,
        rawData: action.payload,
        data: parseFlights(action.payload),
        loadingError: null,
      }
    }

    case flightsActionTypesEnum.SET_FLIGHTS_LOADING : {
      return {
        ...state,
        loading: true,
      }
    }

    case flightsActionTypesEnum.SET_FLIGHTS_ERROR: {
      return {
        ...state,
        loading: false,
        rawData: null,
        data: [],
        loadingError: action.payload.error,
      }
    }

    default:
      return {
        ...state,
      }
  }
}

export default flightsReducer;
