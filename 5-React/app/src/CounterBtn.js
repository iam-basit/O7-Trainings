import { useState } from 'react'
import React from 'react'

export default function CounterBtn() {
  let [num, setNum] = useState()

  return (
    <>
      <button>---</button>

      <button>+++</button>
    </>
  )
}
