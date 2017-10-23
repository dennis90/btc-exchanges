import {OrderedMap} from 'immutable'
import consts from '../actionCreators/consts'

export default function exchanges(state=OrderedMap(), action) {
  switch(action.type) {
    case consts.EXCHANGES_FETCHED:
      return action.payload.reduce((currentState, exchange) => {
        return currentState.update(exchange.name, (item={}) => Object.assign({}, item, exchange))
      }, state)

    default:
      return state
  }
}
