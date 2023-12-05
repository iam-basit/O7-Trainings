import './App.css'
import React, { Fragment } from 'react'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('')
  let [firstName, setFirstname] = useState('')
  let [lastName, setLastname] = useState('')
  let [phoneNumber, setPhoneNumber] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const passData = () => {
    alert(
      `Name:${name}, 
      Firstname: ${firstName}, 
      Lastname: ${lastName}, 
      Phone No:${phoneNumber}, 
      Email: ${email}, 
      Password: ${password}`,
    )
    // alert()
  }

  return (
    <>
      <form onSubmit={passData}>
        <label>Name: </label>
        <input
          type="text"
          onChange={(fun) => {
            // console.log(fun)
            // console.log(fun.target.value)
            setName(fun.target.value)
          }}
        />
        <br />
        <label> Firstname </label>
        <input
          type="text"
          name="firstname"
          onChange={(fun) => {
            setFirstname(fun.target.value)
          }}
        />
        <br />
        <label> Lastname: </label>
        <input
          type="text"
          name="lastname"
          onChange={(fun) => {
            setLastname(fun.target.value)
          }}
        />
        <br />
        <label>Phone : </label>
        <input
          type="phone"
          onChange={(fun) => {
            setPhoneNumber(fun.target.value)
          }}
        />
        <br />
        Email:
        <input
          type="email"
          id="email"
          name="email"
          onChange={(fun) => {
            setEmail(fun.target.value)
          }}
        />
        <br />
        Password:
        <input
          type="Password"
          id="pass"
          name="pass"
          onChange={(fun) => {
            setPassword(fun.target.value)
          }}
        />{' '}
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
