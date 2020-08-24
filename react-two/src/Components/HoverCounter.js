// import React, { Component } from 'react'

// class HoverCounter extends Component {
//   render() {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count : 0
//       }
//     }
  
//     incrementCount = () => {
//       this.setState(prevState => {
//         return { count : prevState.count + 1}
//       })
//     }
//     return (
//       <div>
//         <h1 onMouseOver = {this.incrementCount}>hover cx times</h1>
//       </div>
//     )
//   }
// }

// export default HoverCounter


import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count : 0
  //   }
  // }

  // incrementCount = () => {
  //   this.setState(prevState => {
  //     return{ count: prevState.count + 1}
  //   })
  // }
  
  render() {
    const{count, incrementCount} = this.props
    return (
        <h1 onMouseOver = {incrementCount}>hovered {count} times</h1>
    )
  }
}

export default UpdatedComponent(HoverCounter)
  