import { all, call, fork, put, take,  takeLeading } from "redux-saga/effects";
import { loadFlights, loadFlightsError, loadFlightsIsLoading, } from "../../actions/flights";
import { FlightData } from "../../../utils/interfaces/flightInterfaces";
import { flightsActionTypesEnum, LoadFlightsStartActionType } from "../../actions/actionCreatrorsTypes/flightsActionCreatorsTypes";
import { parseDateToRequestFormat } from "../../../utils/utils";
import { getFlightsRequest } from "../../../utils/skyscanner-api";
import { LocationChangeAction, LOCATION_CHANGE } from 'connected-react-router';

// wks
function* loadFlightsData(date: Date) {

  try {
    yield put(loadFlightsIsLoading());

    const rawData: FlightData = yield call(getFlightsRequest, parseDateToRequestFormat(date));
    yield put(loadFlights(rawData));

  } catch (err) {

    yield put(
      loadFlightsError({
        error: err.message
      }));
  }
}

function* loadDataOnDateChange(action: LoadFlightsStartActionType) {
  yield fork(loadFlightsData, action.payload);
}

function* pageDataLoader() {

  while (true) {
    const locationChangeData:LocationChangeAction = yield take(LOCATION_CHANGE);

    console.log(locationChangeData);

    if (locationChangeData.payload.location.pathname.endsWith('flights')) {
      yield fork(loadFlightsData, new Date());
    }
  }
}

// wtchr
function* flightsSaga() {
  yield all([
    takeLeading(LOCATION_CHANGE, pageDataLoader),
    takeLeading(flightsActionTypesEnum.START_FLIGHTS_LOADING, loadDataOnDateChange)
  ]);
}

export default flightsSaga;
