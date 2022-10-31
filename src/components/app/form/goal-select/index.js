import './goal-select.css';
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function GoalSelect({objNumMax, getNums}) {
  const [goal, setGoal] = useState('')

  const handleChange = (event) => {
    setGoal(event.target.value)
    getNums(event.target.value)
  }

  useEffect(() => {
    console.log(goal)
  })

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '325px' },
        '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {color: '#32C791'},
        '& .MuiFormLabel-root.MuiInputLabel-root': {fontFamily: 'NISEJsrf'},
        '& .MuiInputBase-root.MuiFilledInput-root:after': {borderBottomColor: '#32C791'}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="filled-basic" 
        label="Goals" 
        variant="filled" 
        type="number"
        InputProps={{inputProps: {min: 1, max: objNumMax}}}
        onChange={handleChange}
      />
    </Box>
  );
}

