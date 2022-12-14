import './app.css';
import React, { useEffect, useState } from 'react';
import {Header} from './header/index.js';
import {Form} from './form/index.js'
import {Objectives} from './objectives/index.js'

export function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    document.title = "JSRF Trainer"
  });


  function pullList(goals) {
    console.log('updating list', goals)
    setList(goals)
  }

  return (
    <>
      <Header/>
      <div className="main">
        <Form pullList = {pullList}/>
        <Objectives list = {list}/>
      </div>
    </>
  )
}