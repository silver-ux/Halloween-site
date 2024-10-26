import React from 'react'

export const PageButtons = (props) => {
  return (
    <div className='btns' style={{color:"white", width: "30%"}}>
        <img src={props.image} alt="image" style={{width:"80%", height:150, borderRadius: 30, marginTop: "10%"}} />
        <div className="title">
            <h3 style={{fontSize:"32px", padding: "10px 0"}}>{props.title}</h3>
            <p style={{padding:"10px", lineHeight:1.5}}>{props.text}</p>
        </div>
    </div>
  )
}
