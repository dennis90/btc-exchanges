import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Exchanges from '../components/exchanges'
import reducerStore from '../reducers'
import * as actionCreators from '../actionCreators'


class BitcoinCotation extends React.Component {
  componentDidMount() {
    this.props.actions.fetchExchanges()
  }

  render() {
    return (
      <View id="testes">
        <Exchanges {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinCotation)
