import { call, put } from 'redux-saga/effects'
import { searchTutorSuccess } from 'src/redux/search'
import { Tutor } from 'src/types'

export function* searchTutorWorker(action: any) {
  console.log(action)

  try {
    const response = (yield call(() =>
      fetch('https://www.dse00.com/tutor'),
    )) as Response

    const tutors = (yield response.json()) as Tutor[]

    yield put(searchTutorSuccess({ tutors }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
