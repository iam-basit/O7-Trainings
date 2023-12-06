import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './login-useNavigate'
import RegisterForm from './register-useNavigate'
import CourseDetails from './Courses'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route
            path="courses"
            element={
              <CourseDetails
                courseName="BCA"
                duration="3 Years"
                cost="$770/semester"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
