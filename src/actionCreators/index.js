import consts from './consts'

export const fetchExchanges = () => dispatch => {
  dispatch({type: consts.EXCHANGES_FETCH_STARTED})
  return fetch(consts.FETCH_EXCHANGES_URL)
    .then(response => response.json())
    .then(json => dispatch({type: consts.EXCHANGES_FETCHED, payload: json}))
    .catch(() => dispatch({type: consts.EXCHANGES_FETCH_FAILED}))
}

export const fetchTicker = (exchange) => dispatch => {
  dispatch({type: consts.TICKER_FETCH_STARTED})
  return fetch(exchange.url)
    .then(response => response.json())
    .then(json => dispatch({type: consts.TICKER_FETCHED, payload: {exchange, data: json}}))
    .catch(() => dispatch({type: consts.TICKER_FETCH_FAILED}))
}
