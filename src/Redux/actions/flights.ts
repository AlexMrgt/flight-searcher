import {
  flightsActionTypesEnum,
  GetFlightsPayloadType,
  GetFlightsErrorPayloadType,
  GetFlightsActionType,
  GetFlightsErrorActionType,
  GetFlightsLoadingActionType,
} from "./actionCreatrorsTypes/flightsActionCreatorsTypes";

export const name = 'flights';


export const loadFlights = (payload: GetFlightsPayloadType): GetFlightsActionType => ({
  type: flightsActionTypesEnum.SET_FLIGHTS,
  payload,
});

export const loadFlightsLoading = ( date:Date ): GetFlightsLoadingActionType => ({
  type: flightsActionTypesEnum.SET_FLIGHTS_LOADING,
  payload: date,
});

export const loadFlightsError = (payload: GetFlightsErrorPayloadType): GetFlightsErrorActionType => ({
  type: flightsActionTypesEnum.SET_FLIGHTS_ERROR,
  payload
});
