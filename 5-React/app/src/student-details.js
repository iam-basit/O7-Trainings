function StudentDetails1() {
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
      <table style={tableStyles}>
        <tr>
          <th style={cellStyles}>ID</th>
          <th style={cellStyles}>Name</th>
          <th style={cellStyles}>Course</th>
          <th style={cellStyles}>Duration</th>
        </tr>
        <tr>
          <td style={cellStyles}>001</td>
          <td style={cellStyles}>Basit Malik</td>
          <td style={cellStyles}>Full-Stack</td>
          <td style={cellStyles}>Six Months</td>
        </tr>
      </table>
    </div>
  )
}

export default StudentDetails1
