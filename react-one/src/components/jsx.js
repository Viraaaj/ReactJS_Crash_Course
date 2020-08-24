import React from 'react'

// const Hello = (props) => {  //declare "props" in function.

//   console.log(props);  // you can use any keyword rather than "props" but its easy if you use "props".

//   return(
//     <div>

//     <h1>My name is {props.name} & my roll number is {props.roll} </h1>   
//     {props.children} 

//     </div>
//   ) 
  



  // return(
  //   <div>
  //     <h1>this is jsx</h1>
  //   </div>
  // )



  // return React.createElement('div', {id:'hello', className:'kuchto'}, React.createElement('h1', null, 'this is not jsx')) // At place of null we can use id or className.
// }




// const Hello = (props) => {
//   console.log(props);
//   return(
//     <div>
//       <h1>my name is {props.name} & roll no is {props.roll}</h1>
//       {props.children}
//     </div>
//   )  
// }

// export default Hello


//using destructing:


//another way of destructing: 

const Hello = ({name, roll, children}) => {
  return(
    <div>
      <h1>my name is {name} & roll no is {roll}</h1>
      {children}
    </div>
  )  
}

export default Hello