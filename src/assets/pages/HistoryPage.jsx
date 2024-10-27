import React from 'react'
import '../css/history.css'
import { Content } from '../components/Content'

export const HistoryPage = () => {

  return (
    <div className='history'>
      <div className="wrap">
        <div className="container">
          <Content title="Beginning" text={`Halloween originated over 2000 years ago. It is said to have originated from the festival 'Samhain' held by the ancient Celts in Europe. Samhain means 'the end of summer' and was deeply rooted in the lives of the ancient Celts as a religious event to celebrate the autumn harvest and drive away evil spirits.`} />
        </div>
      </div>
    </div>
  )
}
