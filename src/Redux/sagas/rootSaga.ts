import { all, fork } from "redux-saga/effects";
import flightsSaga from "./flightSaga";

export function* rootSaga() {
  yield all([
    fork(flightsSaga),
  ]);
}
