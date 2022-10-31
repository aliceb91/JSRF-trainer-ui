import './objectives.css';
import React, { useEffect, useRef, useState } from 'react';
import {Tile} from './tile/index.js'

export function Objectives({list}) {
  console.log(list)
  return (
    <div className = 'list'>
      {
        list.map(obj => {
          return (
            <Tile key={obj.name} name={obj.name} type={obj.type}/>
          )
        })
      }
    </div>
  )
}