import React from 'react';
import './Menu.css'
import placeholder from '../../images/placeholder.svg'
import flask from '../../images/flask.svg'
import heart from '../../images/heart.svg'
import projectManagement from '../../images/project-management.svg'
import camera from '../../images/video-camera.svg'
let classNames = require('classnames')

function Menu(props) {
  let clickedLocal = classNames({
    'clicked-button': props.state === props.local
  })
  let clickedTech = classNames({
    'clicked-button': props.state === props.technology
  })
  let clickedEntertainment = classNames({
    'clicked-button': props.state === props.entertainment
  })
  let clickedScience = classNames({
    'clicked-button': props.state === props.science
  })
  let clickedHealth = classNames({
    'clicked-button': props.state === props.health
  })

  return (
    <div className='menu'>
      <button className={`${clickedLocal} menu-button`} onClick={() => props.changeNewsSource(props.local)}>
        <img className='icon' src={placeholder} alt='local news icon' />
        LOCAL NEWS
      </button>
      <button className={`${clickedTech} menu-button`} onClick={() => props.changeNewsSource(props.technology)}>
        <img className='icon' src={projectManagement} alt='technology icon'/>
        TECHNOLOGY
      </button>
      <button className={`${clickedEntertainment} menu-button`} onClick={() => props.changeNewsSource(props.entertainment)}>
        <img className='icon' src={camera} alt='entertainment icon'/>
        ENTERTAINMENT
      </button>
      <button className={`${clickedScience} menu-button`} onClick={() => props.changeNewsSource(props.science)}>
        <img className='icon' src={flask} alt='science icon'/>
        SCIENCE
      </button>
      <button className={`${clickedHealth} menu-button`} onClick={() => props.changeNewsSource(props.health)}>
        <img className='icon' src={heart} alt='health icon'/>
        HEALTH
      </button>
    </div>
  )
}

export default Menu;
