import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Round Result</h1>
            <h2>...</h2>
            <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit </p>
            <Link to="/game1"><button>Next</button></Link>
        </>
    )
}
