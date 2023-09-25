import React from 'react'
import './Videoframe.css'


function Videoframe(props) {
  return (
    <div className='mainbox'>
        <div className='thumbnail'><img className='thumbnail-img' src={props.thumbnail} alt='loading' /></div>
        <div className='mainheading'>
          <div className='channel-logo'><img className='logo' src={props.thumbnail} alt=''/></div>
          <div className='video-heading'>{props.title}</div>
        </div>
        <div className='channelname'>{props.channelname}</div>
        <div className='viewtime'>{props.viewtime}</div>
    </div>
    
  )
}

export default Videoframe