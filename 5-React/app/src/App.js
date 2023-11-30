import './App.css'
import FirstComponent from './first-component'
import StudentDetails1 from './student-details'
import StudentDetails2 from './student-details2'
import StudentDetails3 from './student-details3'

function App() {
  return (
    <div>
      {/*
      <FirstComponent />
      <StudentDetails1
        studentID="001"
        name="Basit"
        course="Full-Stack"
        duration="6 Months"
      />
      <StudentDetails1
        studentID="002"
        name="Suliman"
        course="Full-Stack"
        duration="6 Months"
      />
      <StudentDetails1
        studentID="003"
        name="Jasleen"
        course="Front_end"
        duration="7 Months"
  /> */}
      {/*<StudentDetails2 /> */}
      <StudentDetails3
        studentID="003"
        name="Jasleen"
        course="Front-end"
        duration="7 Months"
      />
    </div>
  )
}

export default App
