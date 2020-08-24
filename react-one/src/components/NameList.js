import React from 'react'
// import person from './Person'    

function NameList() {
  const names = ['bruce', 'bob', 'jetha']
  const nameList = names.map((name,index) => <h2 key = {index}>{name} {index}</h2>)  // idex as a key ca cause many problems.
  return (
    <div>{nameList}</div>
  )
} 

// function NameList() {
//   const persons = [
//     {
//       name : 'jetha',
//       crush : 'babita'
//     },

//     {
//       name: "bapujii",
//       crush: "madhavii"
//     }
//   ]

// const personList = persons.map(person => <h2>i am {person.name}, my crush is {person.crush}</h2>)

// // const personList = persons.map(person => <person key={person.name} person = {person} />)

//   return (
//     <div>
//       {personList}  
//     </div>
//   )
// }

export default NameList
