import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true

  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h2>Ooops! Page not found.</h2>
    </div>
  )
}

export default {
  component: NotFoundPage
}
