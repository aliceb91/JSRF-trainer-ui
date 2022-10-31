import './form.css';
import React, { useEffect, useRef, useState } from 'react';
import {ZoneSelect} from './zone-select/index.js'
import {GoalSelect} from './goal-select/index.js'
import {CharacterToggle} from './character-toggle/index.js'
import {GraffitiToggle} from './graffiti-toggle/index.js'
import {GenerateButton} from './generate-button/index.js'

export function Form({pullList}) {
  const [output, setOutput] = useState({zone: '633ef81dfda6684bb06e27b4', objectiveCount: 1, characterToggle: false, graffitiToggle: false})
  const [objNum, setObjNum] = useState(1)
  let isLoading = useRef(true)

  const [zones, setZones] = useState([])

  useEffect(() => {
    let url;

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      url = `http://localhost:8000/zones`
    } else {
      url = `https://jsrf-trainer-api.vercel.app/zones`
    }

    if (isLoading.current) {
      fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setZones(json)
        isLoading.current = false
        console.log(json)
      })
    }
  }, [zones])

  function getZone(id) {
    const targetZone = zones.find((zone) => zone._id === id)
    if (!targetZone) return
    setOutput((prevState) => ({...prevState, zone: targetZone._id}))
    setObjNum(targetZone.objectiveCount)
  }

  function getNums(num) {
    setOutput((prevState) => ({...prevState, objectiveCount: num}))
  }

  function getChar(char) {
    setOutput((prevState) => ({...prevState, characterToggle: char}))
  }

  function getGraf(graf) {
    setOutput((prevState) => ({...prevState, graffitiToggle: graf}))
  }

  function getUrl() {
    console.log('geturl', output)
    let url;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      url = `http://localhost:8000/zones/${output.zone}?graffiti=${output.graffitiToggle}&character=${output.characterToggle}&number=${output.objectiveCount}`
    } else {
      url = `https://jsrf-trainer-api.vercel.app/zones/${output.zone}?graffiti=${output.graffitiToggle}&character=${output.characterToggle}&number=${output.objectiveCount}`
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        pullList(json)
      })
  }

  return (
    <div className="form">
      <div className="settings">Settings:</div>
      <ZoneSelect getZone = {getZone}/>
      <GoalSelect objNumMax = {objNum} getNums = {getNums}/>
      <CharacterToggle getChar = {getChar}/>
      <GraffitiToggle getGraf = {getGraf}/>
      <GenerateButton getUrl = {getUrl}/>
      <span className='instruction'>
        Instructions:<br></br>
        <p className='instructions' align='justify'>
          This tools is designed to aid in labbing / practising optimal routes for JSRF bingo. Select your zone and number of goals above and apply the relevent filters for character and graffiti squares.
        </p>
      </span>
    </div>
  )
}