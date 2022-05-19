import { PayloadAction } from '@reduxjs/toolkit'
import absoluteUrl from 'next-absolute-url'
import { call, put } from 'redux-saga/effects'
import { loadUserRequest, loadUserSuccess } from 'src/redux/user'
import { User } from 'src/types'

import { LoadUserSuccessPayload } from '../types'

export function* loadUserWorker() {
  try {
    const response = (yield call(() =>
      fetch('http://localhost:3000/api/auth/auth'),
    )) as Response

    const user = (yield response.json()) as User

    yield put(loadUserSuccess({ user }))
  } catch (err) {
    // TODO: handle error
    console.log(err)
  }
}
