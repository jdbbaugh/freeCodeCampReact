import React from'react'

function FormComponent(props) {
  return(
    <main>
      <form>
        <input name="firstName" value={props.data.firstName} onChange={props.handleChange} placeholder="First Name" /><br />
        <input name="lastName" value={props.data.lastName} onChange={props.handleChange} placeholder="Last Name" /><br />
        <input name="age" value={props.data.age} onChange={props.handleChange} placeholder="Age" /><br />
        <label>
          <input
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
          type="radio"
          />Male
        </label>
        <br />
        <label>
          <input
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
          type="radio"
          />Female
        </label>
        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">-- Please Choose A Destination --</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="north pole">North Pole</option>
          <option value="s outh pole">South Pole</option>
        </select>
        <br />
        <label>
          <input
          type="checkbox"
          name="isVegan"
          value=""
          checked={props.data.isVegan}
          onChange={props.handleChange}
          />Vegan?
        </label>
        <br />
        <label>
          <input
          type="checkbox"
          name="isKosher"
          checked={props.data.isKosher}
          onChange={props.handleChange}
          />Kosher?
        </label>
        <br />
        <label>
          <input
          type="checkbox"
          name="isLactoseFree"
          checked={props.data.isLactoseFree}
          onChange={props.handleChange}
          />Lactose Free?
        </label>
        <br />
        <button>SUBMIT</button>
      </form>
      <hr />
      <h2>Entered Information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>Your dietary restrictions:</p>
        <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>

    </main>
  )
}
export default FormComponent