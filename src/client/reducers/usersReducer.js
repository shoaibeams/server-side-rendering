import { FETCH_USERS, FETCH_ADMINS, FETCH_CURRENT_USER } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return payload.data
    case FETCH_ADMINS:
      return { ...state, ...payload }
    case FETCH_CURRENT_USER:
      return { ...state, ...payload }

    default:
      return state
  }
}
