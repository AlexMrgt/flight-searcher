import { all, call, put, takeLatest } from "redux-saga/effects";
import { loadFlights, loadFlightsError, } from "../actions/flights";
import { FlightData } from "../../utils/interfaces/flightInterfaces";
import { GetFlightsLoadingActionType,flightsActionTypesEnum } from "../actions/actionCreatrorsTypes/flightsActionCreatorsTypes";
import { parseDateToRequestFormat } from "../../utils/utils";
import { getFlightsRequest } from "../../utils/skyscanner-api";


function* loadFlightsSaga(action:GetFlightsLoadingActionType) {

  try {
    const data: FlightData = yield call(getFlightsRequest, parseDateToRequestFormat(action.payload) );

    yield put(
      loadFlights({
        data: data
      })
    );

  } catch (err) {
    yield put(
      loadFlightsError({
        error: err.message
      }));
   }
}

function* flightsSaga() {
  yield all([takeLatest(flightsActionTypesEnum.SET_FLIGHTS_LOADING, loadFlightsSaga)]);
}

export default flightsSaga;
