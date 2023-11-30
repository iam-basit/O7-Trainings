import StudentDetails2 from './student-details2'

function StudentDetails3(props) {
  const tableStyles = {
    // borderCollapse: 'collapse',
    width: '100%',
    marginTop: ' 25px',
    backgroundColor: 'pink',
  }

  // Define cell styles
  const cellStyles = {
    border: '1px solid blue',
    padding: '8px',
    textAlign: 'left',
  }

  return (
    <div>
      <h1>This is the Parent Component!</h1>
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
          {/*<td style={cellStyles}>003</td>
          <td style={cellStyles}>Amman</td>
          <td style={cellStyles}>Full-Stack</td>
          <td style={cellStyles}>12 Months</td>*/}
        </tr>
      </table>

      <StudentDetails2
        studentID="002"
        name="Suliman"
        course="Full-Stack"
        duration="6 Months"
      />
    </div>
  )
}

export default StudentDetails3
