import React from 'react'
import './Sidebarcomponent.css'

function Sidebarcomponent(props) {
  return (
    <div className='sidebar-component-block'>
        <div className='sidebar-component-logo'><img className="icon" src={props.logo} alt="" /></div>
        <div className='sidebar-component-heading'>{props.name}</div>
    </div>
  )
}

export default Sidebarcomponent