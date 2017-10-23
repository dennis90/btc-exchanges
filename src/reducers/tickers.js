import {OrderedMap} from 'immutable'
import consts from '../actionCreators/consts'

export default function tickers(state=OrderedMap(), action) {
  switch (action.type) {
    case consts.TICKER_FETCHED:
      // console.log(action)
      return state.update(action.payload.exchange.name, (item={}) =>
        Object.assign({}, item, action.payload.data)
      )

    default:
      return state
  }
}
