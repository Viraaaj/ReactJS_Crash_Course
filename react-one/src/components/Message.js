import React, {Component} from 'react'

class Message extends Component {

  constructor(){

    super()
    this.state = {
      message : 'welcome visitor'
    }
  }

  ChangeMessage(){
    this.setState({
      message: 'thank you for subscribing!!'
    })
  }


      render(){         
        return(
          <div>
          <h1>{this.state.message}</h1>
          <button onClick = {() => this.ChangeMessage()}>Subscribe</button>
          </div>
        
        )
      }
}
export default Message



//this is Set method