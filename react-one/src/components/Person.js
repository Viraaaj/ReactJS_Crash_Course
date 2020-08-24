import React from 'react'

function person({person, key}) {
  return (
    <div>
    <h2>i am {person.name}, my crush is {person.crush}</h2>      
    </div>
  )
}

export default person

