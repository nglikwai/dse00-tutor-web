import history from 'src/history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,

  SELECT,
  GENDER_SELECT,
  PRICE_SELECT,
  FETCH_USER,
  FETCH_TUTORS_SUCCESS,
  FETCH_TUTORS_REQUEST,
  FETCH_TUTOR,

} from './types'



export const select = (label, value) => {
  return {
    type: SELECT,
    payload: { [label]: [value] }
  };
};

export const genderSelect = (value) => {
  return {
    type: GENDER_SELECT,
    payload: [value]
  };
};

export const priceSelect = (value) => {
  return {
    type: PRICE_SELECT,
    payload: value
  };
};


export const fetchUser = (email) => async dispatch => {
  const response = await tutors.get(`/apis/user?email=${email}`);

  dispatch({ type: FETCH_USER, payload: response.data })
}



export const fetchTutorsRequest = () => async dispatch => {
  dispatch({ type: FETCH_TUTORS_REQUEST })
  const response = await tutors.get('/tutor');
  dispatch({ type: FETCH_TUTORS_SUCCESS, payload: response.data })
}

export const fetchTutor = (tutorId) => async dispatch => {
  const response = await tutors.get(`/tutor/${tutorId}`);

  dispatch({ type: FETCH_TUTOR, payload: response.data })
}


export const fetchTutorsWithCriteria = (query) => async dispatch => {
  dispatch({ type: FETCH_TUTORS_REQUEST });
  const response = await tutors.get(`/tutor/search?${query}`);
  dispatch({ type: FETCH_TUTORS_SUCCESS, payload: response.data })
}

export const fetchTutorsWithLocation = (location) => async dispatch => {
  dispatch({ type: FETCH_TUTORS_REQUEST });
  const response = await tutors.get(`/tutor/search?location=${location}`);
  dispatch({ type: FETCH_TUTORS_SUCCESS, payload: response.data })
}


export const fetchTutorsWithSubject = (subject) => async dispatch => {
  dispatch({ type: FETCH_TUTORS_REQUEST });
  const response = await tutors.get(`/tutor/search?subject=${subject}`);
  dispatch({ type: FETCH_TUTORS_SUCCESS, payload: response.data })
}






export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data })
  history.push('/')
}

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data })
  history.push(`/`);
}

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id })
  history.push(`/`);
}


