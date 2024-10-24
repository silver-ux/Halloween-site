import React from 'react'

export const PageButtons = (props) => {
  return (
    <div className='btns' style={{color:"white", width: "30%"}}>
        <img src={props.image} alt="image" style={{width:"100%", borderRadius: 20}} />
        <div className="title">
            <h3 style={{fontSize:"32px", padding: "10px 0"}}>{props.title}</h3>
            <p style={{paddingTop:"15px"}}>{props.text}</p>
        </div>
    </div>
  )
}
