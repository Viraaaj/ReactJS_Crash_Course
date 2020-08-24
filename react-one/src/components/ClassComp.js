import React, {Component} from 'react'

// class ClassComp extends Component {
//       render(){         
//         return<h1>my name is {this.props.name} & my roll number is {this.props.roll}</h1>
//       }
// }
// export default ClassComp


//Destructing:

class ClassComp extends Component {
  render(){  
    const {name,roll} = this.props 
    // const {state1, state2} = this.props      
    return<h1>my name is {name} & my roll number is {roll}</h1>
  }
}
export default ClassComp