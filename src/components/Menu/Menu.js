import React from 'react';
import './Menu.css'

function Menu(props) {
  return (
    <div className='menu'>
      <button onClick={() => props.changeNewsSource(props.local)}>Local News</button>
      <button onClick={() => props.changeNewsSource(props.technology)}>Technology</button>
      <button onClick={() => props.changeNewsSource(props.entertainment)}>Entertainment</button>
      <button onClick={() => props.changeNewsSource(props.science)}>Science</button>
      <button onClick={() => props.changeNewsSource(props.health)}>Health</button>
    </div>
  )
}

export default Menu;
