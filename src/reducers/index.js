import {combineReducers} from 'redux'

import exchanges from './exchanges'
import tickers from './tickers'

export default combineReducers({
  exchanges,
  tickers
})
