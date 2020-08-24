import React, { Component } from 'react'
import Practice from './Practice1'

class Practice2 extends Component {
  render() {
    const{count , incrementCount} = this.props
    return<button onClick={incrementCount}>{this.props.name} clicked {count} times</button>
  }
}

export default Practice(Practice2, 10)
