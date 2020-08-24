import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count :0
    }
  }
  
  incrementCount= () => {
    this.setState(prevState => {
      return{count: prevState.count + 1}
    })
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
        {/* {this.props.children(this.state.count, this.incrementCount)}  //children is used cause we used <Counter></Counter> */}
      </div>
    )
  }
}

export default Counter
