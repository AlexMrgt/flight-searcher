
import { LOCATION_CHANGE, RouterState } from "connected-react-router";
import { FlightData } from "../../utils/interfaces/flightInterfaces";
import { LoadFlightsErrorPayloadType, flightsActionTypesEnum, LoadFlightsActionType, LoadFlightsErrorActionType, LoadFlightsOnLoadingActionType, LoadFlightsStartActionType } from "./actionCreatrorsTypes/flightsActionCreatorsTypes";

export const name = 'flights';

export const loadFlights = (data: FlightData): LoadFlightsActionType => ({
  type: flightsActionTypesEnum.SET_FLIGHTS,
  payload: data,
});

export const loadFlightsIsLoading = ():LoadFlightsOnLoadingActionType => ({
  type: flightsActionTypesEnum.SET_FLIGHTS_LOADING,
});

export const loadFlightsError = (payload: LoadFlightsErrorPayloadType): LoadFlightsErrorActionType => ({
  type: flightsActionTypesEnum.SET_FLIGHTS_ERROR,
  payload,
});

export const loadFlightsStart = (date:Date,):LoadFlightsStartActionType => ({
  type: flightsActionTypesEnum.START_FLIGHTS_LOADING,
  payload: date,
})

export interface LocationChangeAction {
  type: typeof LOCATION_CHANGE;
  payload: RouterState;
}
