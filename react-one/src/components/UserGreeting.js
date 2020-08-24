import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
  render() {

    return this.state.isLoggedIn && <div>welcomee you are logged in!!</div>  // it will check if its true only then msg will be displayed otherwise blank.

    // return this.state.isLoggedIn ?(                                  //"?" checks for true or false
    //   <div>welcomee you are logged in!!</div>
    //   ) : (
    //   <div>welcomee!!</div>)
    

    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>welcomee you are logged in!!</div>
    // }
    // else{
    //   message = <div>welcomee!!</div>
    // }
    // return <div>{message}</div>


    // if(this.state.isLoggedIn){
    //   return <div>welcomee you are logged in!!</div>
    // }
    // else{
    //   return <div>welcomee!!</div>
    // }


    // return (
    //   <div>
    //     <div>welcome!!</div>
    //     <div>welcome guests</div>
    //   </div>
    // )
  }
}

export default UserGreeting
