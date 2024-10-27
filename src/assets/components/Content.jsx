import React from 'react'

export const Content = (props) => {
  return (
    <div style={{color: "whitesmoke", marginTop: 70, backgroundColor: "rgba(0, 0, 0, 0.6)", padding:50, borderRadius: 20}}>
        <h3 style={{fontSize:35, paddingBottom:70, textDecoration:"underline", textDecorationColor:"red"}}>{props.title}</h3>
        <p style={{lineHeight:1.8, fontSize:24, fontFamily: "Noto Sans JP, serif", textAlign: 'justify'}}>{props.text}</p>
    </div>
  )
}
