import { all, fork } from 'redux-saga/effects';
import { watchKinops } from './sagas/kinops';

export function* sagas() {
  yield all([watchKinops()]);
}

export function combineSagas(allSagas) {
  return function* combinedSagas() {
    yield all(allSagas.map(s => fork(s)));
  };
}
