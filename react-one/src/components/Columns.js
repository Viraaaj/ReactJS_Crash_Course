import React from 'react'

function Columns() {

  const items = []

  return (
    <React.Fragment>{         //we can use "<></>" this tag instead of "<React.Fragment><React.Fragment/>" but then we cannot add "key" attribute.
      items.map(item => (
        <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.Title}</p>
        </React.Fragment>
      ))
      }
      <td>Name</td>
      <td>Number</td>
    </React.Fragment>
  )
}
export default Columns 
