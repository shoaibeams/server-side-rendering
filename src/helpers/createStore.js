import axios from 'axios'
import { URL } from '../client/actions/types'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers'

export default req => {
  const axiosInstance = axios.create({
    baseURL: URL,
    headers: { cookie: req.get('cookie') || '' }
  })
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )

  return store
}
