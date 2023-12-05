import './App.css'
import React, { Fragment } from 'react'
import { useState } from 'react'

function App() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const passData = () => {
    alert(
      `
      Email:  ${email}
      Password:  ${password}
      `,
    )
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={passData}>
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
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
