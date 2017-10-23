import React from 'react'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import BitcoinCotation from './src/containers/BitcoinCotation'
import reducers from './src/reducers'

const store = createStore(reducers, applyMiddleware(thunk))


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BitcoinCotation />
      </Provider>
    )
  }
}
