import React from 'react'
import './style.css'

const HeaderContent = (props) => {
    const {headertext, icon} = props
  return (
    <div className='wrapper'>
      <h2>{headertext}</h2>
      <span>{icon}</span>
    </div>
  )
}

export default HeaderContent
