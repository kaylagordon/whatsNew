import React from 'react';
import './Menu.css'
import placeholder from '../../images/placeholder.svg'
import flask from '../../images/flask.svg'
import heart from '../../images/heart.svg'
import projectManagement from '../../images/project-management.svg'
import camera from '../../images/video-camera.svg'

function Menu(props) {
  return (
    <div className='menu'>
      <button className='menu-button' onClick={() => props.changeNewsSource(props.local)}>
        <img className='icon' src={placeholder}/>
        LOCAL NEWS
      </button>
      <button className='menu-button' onClick={() => props.changeNewsSource(props.technology)}>
        <img className='icon' src={projectManagement}/>
        TECHNOLOGY
      </button>
      <button className='menu-button' onClick={() => props.changeNewsSource(props.entertainment)}>
        <img className='icon' src={camera}/>
        ENTERTAINMENT
      </button>
      <button className='menu-button' onClick={() => props.changeNewsSource(props.science)}>
        <img className='icon' src={flask}/>
        SCIENCE
      </button>
      <button className='menu-button' onClick={() => props.changeNewsSource(props.health)}>
        <img className='icon' src={heart}/>
        HEALTH
      </button>
    </div>
  )
}

export default Menu;
