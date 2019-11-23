import React from 'react';
import './Menu.css';
import placeholder from '../../images/placeholder.svg';
import flask from '../../images/flask.svg';
import heart from '../../images/heart.svg';
import projectManagement from '../../images/project-management.svg';
import camera from '../../images/video-camera.svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
      <button className={`${clickedLocal} menu-button local-button`} onClick={() => props.changeNewsSource(props.local)}>
        <img className='icon' src={placeholder} alt='local news icon' />
        <p className='button-label'>LOCAL NEWS</p>
      </button>
      <button className={`${clickedTech} menu-button technology-button`} onClick={() => props.changeNewsSource(props.technology)}>
        <img className='icon' src={projectManagement} alt='technology icon'/>
        <p className='button-label'>TECHNOLOGY</p>
      </button>
      <button className={`${clickedEntertainment} menu-button entertainment-button`} onClick={() => props.changeNewsSource(props.entertainment)}>
        <img className='icon' src={camera} alt='entertainment icon'/>
        <p className='button-label'>ENTERTAINMENT</p>
      </button>
      <button className={`${clickedScience} menu-button science-button`} onClick={() => props.changeNewsSource(props.science)}>
        <img className='icon' src={flask} alt='science icon'/>
        <p className='button-label'>SCIENCE</p>
      </button>
      <button className={`${clickedHealth} menu-button health-button`} onClick={() => props.changeNewsSource(props.health)}>
        <img className='icon' src={heart} alt='health icon'/>
        <p className='button-label'>HEALTH</p>
      </button>
    </div>
  )
}

Menu.propTypes = {
  local: PropTypes.array,
  health: PropTypes.array,
  science: PropTypes.array,
  technology: PropTypes.array,
  entertainment: PropTypes.array,
  changeNewsSource: PropTypes.func,
  state: PropTypes.string
}

export default Menu;
