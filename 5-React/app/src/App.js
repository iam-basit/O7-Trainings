import './App.css'
import React, { Fragment } from 'react'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  return (
    <>
      <form>
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
          size="15"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />
        <br />
        <label> Middlename: </label>
        <input
          type="text"
          name="middlename"
          size="15"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />
        <br />
        <label> Lastname: </label>
        <input
          type="text"
          name="lastname"
          size="15"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />
        <br />
        <label>Phone : </label>
        <input
          type="text"
          name="country code"
          value="+91"
          size="2"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />
        <input
          type="text"
          name="phone"
          size="10"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />{' '}
        <br />
        Email:
        <input
          type="email"
          id="email"
          name="email"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />{' '}
        <br />
        Password:
        <input
          type="Password"
          id="pass"
          name="pass"
          onChange={(fun) => {
            setName(fun.target.value)
          }}
        />{' '}
        <br />
        <input type="button" value="Submit" />
      </form>
    </>
  )
}

export default App
