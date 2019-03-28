import { FETCH_CURRENT_USER } from '../actions/types'

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_USER:
      return payload || false
    default:
      return state
  }
}
