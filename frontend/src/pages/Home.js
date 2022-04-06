import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <>
      <header><div className="logo"><img src="/logo.png" /></div></header>
        <h1>Flood Game</h1>
        <h2>Welcome</h2>
      <div className="logo"><img src="/favicon.png" /></div>

      <div className="logo"><img src="/logo2.png" /></div>
          <p>Welcome to the RPG. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit </p>
              <Link to="/form"><button>Begin</button></Link>
    </>
  )
}
