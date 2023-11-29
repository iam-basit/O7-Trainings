function StudentDetails2() {
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
      <table style={tableStyles}>
        <tr>
          <th style={cellStyles}>ID</th>
          <th style={cellStyles}>Name</th>
          <th style={cellStyles}>Course</th>
          <th style={cellStyles}>Duration</th>
        </tr>
        <tr>
          <td style={cellStyles}>002</td>
          <td style={cellStyles}>Soliman Mayar</td>
          <td style={cellStyles}>Full-Stack</td>
          <td style={cellStyles}>Six Months</td>
        </tr>
      </table>
    </div>
  )
}

export default StudentDetails2
