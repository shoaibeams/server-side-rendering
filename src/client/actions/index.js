import axios from 'axios'
import { FETCH_USERS, FETCH_ADMINS, FETCH_CURRENT_USER, URL } from './types'

export const fetchUsers = payload => async dispatch => {
  const res = await axios.get(`${URL}/users`)
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

export const fetchAdmins = payload => {}

export const fetchCurrentUser = payload => {}
