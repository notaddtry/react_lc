import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

import './firebase'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/react_lc'>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
