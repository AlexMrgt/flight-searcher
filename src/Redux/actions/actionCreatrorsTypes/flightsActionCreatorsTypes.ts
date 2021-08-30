import { FlightData } from "../../../utils/interfaces/flightInterfaces";

export enum flightsActionTypesEnum {
  SET_FLIGHTS = "SET_FLIGHTS",
  SET_FLIGHTS_LOADING = "SET_FLIGHTS_LOADING",
  SET_FLIGHTS_ERROR = "SET_FLIGHTS_ERROR",
  START_FLIGHTS_LOADING = 'START_FLIGHTS_LOADING'
}
export interface LoadFlightsErrorPayloadType {
  error: string,
}

export interface LoadFlightsActionType {
  type: typeof flightsActionTypesEnum.SET_FLIGHTS;
  payload: FlightData;
};

export interface LoadFlightsErrorActionType {
  type: typeof flightsActionTypesEnum.SET_FLIGHTS_ERROR;
  payload: LoadFlightsErrorPayloadType,
};

export interface LoadFlightsStartActionType {
  type: typeof flightsActionTypesEnum.START_FLIGHTS_LOADING;
  payload: Date;
};

export interface LoadFlightsOnLoadingActionType {
  type: typeof flightsActionTypesEnum.SET_FLIGHTS_LOADING;
};

export type FlightsActionsTypes =
  | LoadFlightsStartActionType
  | LoadFlightsOnLoadingActionType
  | LoadFlightsActionType
  | LoadFlightsErrorActionType;
