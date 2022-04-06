import React from 'react'
import { Link } from 'react-router-dom'

export default function TheEnd() {
  return (
      <>
        <section>Please wait till all the other participants...</section>
        <Link to="/game"><button>Begin Game</button></Link>
      </>
  )
}
