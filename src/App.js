import React, { Component } from 'react'
// import Conditional from './Conditional'
// import todoList from './todoList'
// import Todoitem from './Todoitem'
// import './index.css'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     console.log("click")
//     this.setState(prvState =>{
//       return {
//         isLoggedIn: !prvState.isLoggedIn
//       }
//     })
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
//     let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
//     return (
//       <div>
//         <h2>{displayText}</h2>
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </div>
//     )
//   }
// }


// TODO: THIS IS MAIN TODOLIST APP
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todoList
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(oldState => {
//         if (oldState.id === id) {
//           oldState.completed = !oldState.completed
//         }
//         return oldState
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//     // console.log("clicked man", id)
//   }
//   render() {
//     const todoItems = this.state.todos.map(todoItm =>
//       <Todoitem key={todoItm.id} item={todoItm} handleChange={this.handleChange}/>
//     )
//     return (
//       <div className="meContainer">
//         {todoItems}
//       </div>
//     )
//   }
// }

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//     this.handleClick2 = this.handleClick2.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//   handleClick2() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count * 2
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change</button>
//         <br/>
//         <button onClick={this.handleClick2}>Change + 2</button>
//       </div>
//     )
//   }
// }

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const{name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return(
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange} />
        <br/>
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
      </form>
    )
  }
}