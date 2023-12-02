import './App.css'
import CourseDetails from './Courses'

function App() {
  return (
    <div>
      <CourseDetails
        courseName="BCA"
        duration="3 Years"
        cost="$770 / Semester"
      />
      <CourseDetails
        courseName="MCA"
        duration="2 Years"
        cost="$800 / Semester"
      />
    </div>
  )
}

export default App
