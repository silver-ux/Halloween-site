import React from 'react'
import { MainVisual } from '../components/MainVisual'
import { PageButtons } from '../components/PageButtons'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <main>
      <div className="wrap">
          <MainVisual />
          <div className="container">
            <Link to="/history">
              <PageButtons title="History" text="Writing here about a halloween history." image="src/assets/img/7784913.jpg" />
            </Link>
            <Link>
              <PageButtons title="Mythology" text="Writing here about Greek mythology gods. I don't know it related to Halloween." image="src/assets/img/castle.jpg" />
            </Link>
            <Link>
              <PageButtons title="Monsters" text="Writing here about Halloween Monsters." image="src/assets/img/ghost.jpg" />
              </Link>
          </div>
        </div>
    </main>
  )
}
