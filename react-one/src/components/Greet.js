import React from 'react'

// function Greet(){
//   return <h1>Helloooo!!</h1>
// }

//now using ES6:

// export const Greet = () => <h1>helloooooo!!</h1> // If you are using export here i.e. before const then the name of file matters.

const Greet = () => <h1>helloooooo!!</h1>

export default Greet // If you are using default export the name doesnt matter in (import) .js file only location matters (name should be in MyComponent or MyHouse format)