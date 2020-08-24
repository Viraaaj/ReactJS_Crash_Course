import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       select: 'react'
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,     
    })
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments : event.target.value
    })
  }

  handleSelectChange = (event) => {
    this.setState({
      select: event.target.value
    })
  }

  handleSubmit = (event) =>{
    alert(`${this.state.username}, ${this.state.comments}, ${this.state.select}`)
    event.preventDefault()  //entered data will remain even after closing alert tag
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>username</label>
        <input type="text" value={this.state.username} onChange = {this.handleUsernameChange}/>
      </div>

      <div>
        <label>comments: </label>
        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
      </div>

      <div>
        <label>select</label>
        <select value={this.state.select} onChange={this.handleSelectChange}>
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="js">js</option>
        </select>
      </div>

      <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
