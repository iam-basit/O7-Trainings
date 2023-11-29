function StudentDetails3() {
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
      <table style={tableStyles}>
        <tr>
          <th style={cellStyles}>ID</th>
          <th style={cellStyles}>Name</th>
          <th style={cellStyles}>Course</th>
          <th style={cellStyles}>Duration</th>
        </tr>
        <tr>
          <td style={cellStyles}>003</td>
          <td style={cellStyles}>Aman</td>
          <td style={cellStyles}>Full-Stack</td>
          <td style={cellStyles}>12 Months</td>
        </tr>
      </table>
    </div>
  )
}

export default StudentDetails3
