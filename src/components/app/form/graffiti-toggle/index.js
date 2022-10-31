import './graffiti-toggle.css';
import React, {useEffect, useState} from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function GraffitiToggle({getGraf}) {
  const [toggle, setToggle] = useState(false)

  function handleChange() {
    if (toggle === false) {
      setToggle(true)
      getGraf(true)
    }
    if(toggle === true) {
      setToggle(false)
      getGraf(false)
    }
  }

  useEffect(() => {
    console.log(toggle)
  })

  return (
    <div className='graffiti'>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="start"
            control={<Switch color="primary"/>}
            label="Graffiti Goals"
            labelPlacement="start"
            sx={{
              '& .MuiTypography-root': {fontFamily: 'NISEJsrf', paddingRight: '60px'},
              '& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked': {color: '#32C791'},
              '& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {backgroundColor: '#32C791'}
            }}
            onChange={handleChange}
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}