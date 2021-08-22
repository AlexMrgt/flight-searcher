import { FlightData } from "../../../utils/interfaces/flightInterfaces";

export enum flightsActionTypesEnum {
  SET_FLIGHTS = "SET_FLIGHTS",
  SET_FLIGHTS_LOADING = "SET_FLIGHTS_LOADING",
  SET_FLIGHTS_ERROR = "SET_FLIGHTS_ERROR"
}

// for payloads
export interface GetFlightsPayloadType {
  data: FlightData;
}

export interface GetFlightsErrorPayloadType {
  error: string;
}

// for actions
export interface GetFlightsLoadingActionType {
  type: typeof flightsActionTypesEnum.SET_FLIGHTS_LOADING;
  payload: Date,
}

export interface GetFlightsActionType  {
  type: typeof flightsActionTypesEnum.SET_FLIGHTS;
  payload: GetFlightsPayloadType;
};

export interface GetFlightsErrorActionType {
  type: typeof flightsActionTypesEnum.SET_FLIGHTS_ERROR;
  payload: GetFlightsErrorPayloadType;
};

export type FlightsActionsTypes =
  | GetFlightsLoadingActionType
  | GetFlightsActionType
  | GetFlightsErrorActionType;
