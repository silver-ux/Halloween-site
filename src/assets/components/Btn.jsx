import React from 'react'

export const Btn = (props) => {
  return (
    <div style={{margin: "5px"}}>
        <button style={{color: props.color, backgroundColor: props.bgc, fontSize: props.size, border: "none", padding: "10px 20px", cursor: "pointer", borderRadius:"15px"}}>{props.text}</button>
    </div>
  )
}
