import React from 'react'
import { MainVisual } from '../components/MainVisual'
import { PageButtons } from '../components/PageButtons'
import { Link } from 'react-router-dom'
import pi1 from '../../img/7784913.jpg'
import castle from '../../img/castle.jpg'
import monster from '../../img/ghost.jpg'

export const HomePage = () => {
  return (
    <main>
      <div className="wrap">
          <MainVisual />
          <div className="container">
            <Link to="/history">
              <PageButtons title="History" text="Writing here about a halloween history." image={pi1} />
            </Link>
            <Link>
              <PageButtons title="Mythology" text="Writing here about Greek mythology gods. I don't know it related to Halloween." image={castle} />
            </Link>
            <Link>
              <PageButtons title="Monsters" text="Writing here about Halloween Monsters." image={monster} />
              </Link>
          </div>
        </div>
    </main>
  )
}
