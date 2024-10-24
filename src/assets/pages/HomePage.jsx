import React from 'react'
import { MainVisual } from '../components/MainVisual'
import { PageButtons } from '../components/PageButtons'

export const HomePage = () => {
  return (
    <main>
      <div className="wrap">
          <MainVisual />
          <div className="container">
            <PageButtons title="History" text="Writing here about a halloween history" image="src/assets/img/7784913.jpg" />
            <PageButtons title="Mythology" image="src/assets/img/7784913.jpg" />
            <PageButtons title="Monsters" image="src/assets/img/7784913.jpg" />
          </div>
        </div>
    </main>
  )
}
