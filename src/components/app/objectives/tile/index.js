import './tile.css';
import React, { useEffect, useRef, useState } from 'react';

export function Tile(props) {

  function findType(props) {
    if (props.type === 'Graffiti') {
      return 'imageGraffiti'
    } else if (props.type === 'Character') {
      const cut = props.name.substr(props.name.indexOf(" ") + 1);
      return `image${cut}`
  } else {
    return 'imageSoul'
  }
}

  return (
    <div className='rectangle'>
      <div className={findType(props)}/>
      <div className='goalName'>
        {props.name}
      </div>
    </div>
  )
}