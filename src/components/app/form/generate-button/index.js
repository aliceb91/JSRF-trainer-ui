import './generate-button.css';
import React, {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function GenerateButton({getUrl}) {
  
  function handleChange() {
    getUrl()
  }

  return (
    <div className='generate'>
      <Stack 
        direction="row"
        sx={{
          '& .css-jcwuwq-MuiButtonBase-root-MuiButton-root': {fontFamily: 'NISEJsrf', backgroundColor: '#32C791', minWidth: '325px', maxWidth: '325px'},
          '& .css-jcwuwq-MuiButtonBase-root-MuiButton-root:hover': {backgroundColor: '#32C791'},
        }}
        paddingLeft='8px'
        onClick={handleChange}
        >
        <Button variant="contained">Generate</Button>
      </Stack>
    </div>
  )
}