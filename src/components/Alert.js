import React, { useState } from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"30px"}}>
   {props.alert && <div className="alert alert-warning alert-dismissible fade     show" role="alert" style={{color: props.mode === "dark"? "black":"white",backgroundColor:'rgb(41, 53, 227)'}}>
     <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>}
    </div>
    
  )
}
