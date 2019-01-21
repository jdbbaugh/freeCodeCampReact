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
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "red"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({[name]: value})
  }
  render() {
    return(
      <form>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
        <br/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
        <br />
        <textarea
          value={"Some default value."}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />Is friendly?
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />Female
        </label>
        <br />
        <label>Favorite Color: </label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
          >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        {this.state.gender ? <h2>You are a {this.state.gender}</h2> : <h2>What is your gender?</h2>}
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )
  }
}