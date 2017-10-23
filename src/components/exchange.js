import React from 'react'
import {View, Text} from 'react-native'

export default class Exchange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTicker: {}
    }
  }

  componentDidMount() {
    this.props.actions.fetchTicker(this.props.exchange)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentTicker: nextProps.tickers.get(this.props.exchange.name)[this.props.exchange.data_path]
    })
  }

  render() {
    const style = {
      marginTop: 10,
      borderWidth: 0.5,
      borderColor: '#d6d7da'
    }

    return (
      <View
        id={'exchange-' + this.props.exchange.name}
        style={style}>
        <Text>exchange: {this.props.exchange.name}</Text>
        <Text>High: {this.state.currentTicker.high} Low: {this.state.currentTicker.low}</Text>
        <Text>Last: {this.state.currentTicker.last}</Text>
      </View>
    )
  }
}
