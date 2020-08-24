import React, { Component } from 'react'


class LifecycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name : 'hellooo'
    }
    console.log('LifecycleB constructor');
  }

  static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('LifecycleB componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
    return null
  }

  componentDidUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
  }
  
  render() {
      console.log('LifecycleB render');
      return(
      <div>Lifecycle B</div>
      )  
  }
}

export default LifecycleB
