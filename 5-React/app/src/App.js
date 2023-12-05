import './App.css'
import React, { Fragment } from 'react'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('')

  return (
    <>
      <form>
        <label>Name: </label>
        <input
          type="text"
          onChange={(fun) => {
            // console.log(fun)
            console.log(fun.target.value)
            // setName()
          }}
        />
      </form>
    </>
  )
}

export default App
