import React from 'react'
import '../css/header.css'
import { Btn } from './Btn'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <h1>HOME</h1>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Movies
                    </li>
                </ul>
                <Btn size="24px" text="EN" bgc="black" color="white" />
            </nav>
        </div>
    </header>
  )
}
