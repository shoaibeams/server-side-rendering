import { FETCH_USERS, FETCH_ADMINS, FETCH_CURRENT_USER } from './types'

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data
  })
}

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users')
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  })
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins')
  dispatch({ type: FETCH_ADMINS, payload: res.data })
}
