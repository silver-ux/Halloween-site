import React from 'react'
import '../css/header.css'
import { Btn } from './Btn'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <Link to="/"> 
                <h1>HOME</h1>
            </Link>
            <nav>
                <ul>
                    <Link to="/history">
                    <li>History</li>
                    </Link>
                    <Link to="https://parade.com/living/halloween-monsters" target="_blank">
                    <li>Monsters</li>   
                    </Link>
                </ul>
                <Btn size="24px" text="EN" bgc="black" color="white" />
            </nav>
        </div>
    </header>
  )
}
