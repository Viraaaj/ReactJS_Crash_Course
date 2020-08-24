import React, { Component } from 'react'

export class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message : 'hello'
    }
    // this.ClickHandler = this.ClickHandler.bind(this)  event binding method 3 
  }
  
  // ClickHandler(){
  //   this.setState({
  //     message : 'this is event binding'
  //   })
  //   console.log(this);   
  // }
  
  ClickHandler = () => {
    this.setState({
      message : '4th method'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick = {this.ClickHandler.bind(this)}>EventBind</button>  1st method od event binding  */}
        {/* <button onClick = {() => this.ClickHandler()}>EventBind</button>  2nd method */}
        {/* <button onClick = {this.ClickHandler}>EventBind</button>  3rd method mostly used and useful defined in constructor  */}
        <button onClick = {this.ClickHandler}>EventBind</button>
      </div>
    )
  }
}

export default EventBind
