import React from 'react'
import '../css/history.css'
import { Content } from '../components/Content'
import { Btn } from '../components/Btn'
import { Link } from 'react-router-dom'

export const HistoryPage = () => {

  return (
    <div className='history'>
      <div className="wrap">
        <div className="container">
          <Content title="Beginning">
          Halloween originated over 2000 years ago. It is said to have originated from the festival <b style={{color:"red"}}>'Samhain'</b> held by the ancient Celts in Europe. Samhain means <b style={{color:"red"}}>'the end of summer'</b> and was deeply rooted in the lives of the ancient Celts as a religious event to celebrate the autumn harvest and drive away evil spirits.
          </Content>
          <Content title="The meaning">
          This indigenous belief eventually became associated with Christianity, and it came to be held as the eve of All Saints' Day, a day to pray to Christian saints. Hallow means saint, and All Saints' Day is also written as <b style={{color:"red"}}>All Hallows</b>.
          <br /><hr />
          October 31st, the eve of All Hallows on November 1st, is <b style={{color:"red"}}>All Hallow's Even (Eve)</b>. This was shortened and corrupted to <b style={{color:"red"}}>Halloween</b>. To be precise, it is said to be from October 31st to November 2nd, and during this period, Christians hold events to comfort the souls of the dead who return to the earth.
          </Content>
          <div style={{textAlign:"center", marginTop: 60,}}>
          <Link to="/">
            <Btn size="23px" text="Back to Top" />
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
