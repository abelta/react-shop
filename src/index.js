import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { accessGlobalStore } from './middleware'
import App from './App'
import './styles/normalize.css'
import './styles/skeleton.css'
import './index.css'

let store = createStore(
  reducers, compose(
    applyMiddleware(accessGlobalStore),
    window.devToolsExtension && window.devToolsExtension()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
