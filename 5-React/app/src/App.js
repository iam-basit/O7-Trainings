import './App.css'
import React, { Fragment } from 'react'
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<loginForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
