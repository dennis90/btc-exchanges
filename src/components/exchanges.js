import React from 'react'

import Exchange from './exchange'
import {View, Text} from 'react-native'


export default class Exchanges extends React.Component {
  render() {
    return (
      <View id="exchanges" style={{marginTop: 30}}>
        {this.props.exchanges.toArray().map(exchange =>
          <Exchange
            key={exchange.name}
            exchange={exchange}
            actions={this.props.actions}
            tickers={this.props.tickers} />
        )}
      </View>
    )
  }
}
