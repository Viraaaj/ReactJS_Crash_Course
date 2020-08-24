import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name : 'hellloo'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name : 'hello'
      })
    })
  }
  
  render() {
    console.log('Parent Comonent render');
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    )
  }
}

export default ParentComp
