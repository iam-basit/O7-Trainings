import './App.css'
import React, { Fragment } from 'react'

function App() {
  var singersList = [
    { singer: 'A', songName: 'AfG', type: 'Rap' },
    { singer: 'B', songName: 'AfG2', type: 'Pop' },
    { singer: 'C', songName: 'AfG3', type: 'Ska' },
  ]
  const songNames = singersList.map((singerObj) => singerObj.songName)

  return (
    <Fragment>
      <div>
        Song Names:
        {songNames.map((songName, index) => (
          <p key={index}>
            {index}: {songName}
          </p>
        ))}
      </div>
    </Fragment>
  )
}

export default App
