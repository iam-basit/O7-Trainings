function StudentDetails1(props) {
  const tableStyles = {
    // borderCollapse: 'collapse',
    width: '100%',
    backgroundColor: 'yellow',
  }

  // Define cell styles
  const cellStyles = {
    border: '1px solid red',
    padding: '8px',
    textAlign: 'left',
  }

  return (
    <div>
      <h1>This is the subChild Component!</h1>
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
    </div>
  )
}

export default StudentDetails1
