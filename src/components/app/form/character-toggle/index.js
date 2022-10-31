import './character-toggle.css';
import React, {useEffect, useState} from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function CharacterToggle({getChar}) {
  const [toggle, setToggle] = useState(false)

  function handleChange() {
    if (toggle === false) {
      setToggle(true)
      getChar(true)
    }
    if(toggle === true) {
      setToggle(false)
      getChar(false)
    }
  }

  useEffect(() => {
    console.log(toggle)
  })

  return (
    <div className='character'>
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="start"
            control={<Switch color="primary"/>}
            label="Character Goals"
            labelPlacement="start"
            sx={{
              '& .css-ahj2mt-MuiTypography-root': {fontFamily: 'NISEJsrf', paddingRight: '20px'},
              '& .css-mghcik-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked': {color: '#32C791'},
              '& .css-mghcik-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {backgroundColor: '#32C791'},
            }}
            onChange={handleChange}
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}