import { all, fork } from "redux-saga/effects";
import flightsSaga from "./flightsSaga";

export function* rootSaga() {
  yield all([fork(flightsSaga)]);
}
