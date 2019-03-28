import { FETCH_ADMINS } from '../actions/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_ADMINS:
      return payload || []
    default:
      return state
  }
}
