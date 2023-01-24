import React from 'react'

export default function Alert(props) {

  const capitalize = (word)=>{
    const lower= word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }  

  return (
    props.alertBar &&
    <>
      <br/>
      <div className='container'>
        <div className="row ms-2 me-2">
          <div className={`alert alert-${props.alertBar.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertBar.type==="danger"?"error":props.alertBar.type)}: </strong>{props.alertBar.message}
          </div> 
        </div>      
      </div>
    </>
  )
}
