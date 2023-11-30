import StudentDetails1 from './student-details'

function StudentDetails2(props) {
  const tableStyles = {
    // borderCollapse: 'collapse',
    width: '100%',
    marginTop: ' 25px',
    backgroundColor: 'red',
  }

  // Define cell styles
  const cellStyles = {
    border: '1px solid green',
    padding: '8px',
    textAlign: 'left',
  }

  return (
    <div>
      <h1>This is the Child Component!</h1>
      <table style={tableStyles}>
        <tr>
          <th style={cellStyles}>ID</th>
          <th style={cellStyles}>Name</th>
          <th style={cellStyles}>Course</th>
          <th style={cellStyles}>Duration</th>
        </tr>
        <tr>
          <td style={cellStyles}>{props.studentID}</td>
          <td style={cellStyles}>{props.name}</td>
          <td style={cellStyles}>{props.course}</td>
          <td style={cellStyles}>{props.duration}</td>
        </tr>
      </table>

      <StudentDetails1
        studentID="001"
        name="Basit"
        course="Full-Stack"
        duration="6 Months"
      />
    </div>
  )
}

export default StudentDetails2
