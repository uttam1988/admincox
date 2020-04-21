import React from 'react'
import PropTypes from 'prop-types'
import routes from './routes'

const App = () => {
  return (
    <div>
      { routes }
    </div>
    
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
