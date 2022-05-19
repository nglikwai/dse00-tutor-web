import { all, fork } from 'redux-saga/effects'

import { searchWatcher } from './search/saga'
import { loadWatcher } from './user/saga'

const combineSagas = (sagas: any) =>
  function* rootSaga() {
    try {
      yield all(sagas.map(fork))
    } catch (err) {
      console.log(err)
    }
  }

export const rootSaga = combineSagas([searchWatcher, loadWatcher])
