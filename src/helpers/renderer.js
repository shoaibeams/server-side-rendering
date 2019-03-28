import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
import { Provider } from 'react-redux'
import Routes from '../client/Routes'

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `  
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
    <div id='root'>${content}</div>
    <script>
      window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src='bundle.js'></script>
  </body>
  </html>
  `
}
