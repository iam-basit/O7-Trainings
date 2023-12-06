import { useState } from 'react'
import React from 'react'

export default function LoginForm() {
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
