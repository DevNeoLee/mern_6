import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <h1>Flood Game</h1>
        <h2>Welcome</h2>
          <p>Welcome to the RPG. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit </p>
              <Link to="/form"><button>Begin</button></Link>
    </>
  )
}
