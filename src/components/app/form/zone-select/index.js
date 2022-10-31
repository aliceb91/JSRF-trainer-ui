import './zone-select.css';
import React, {useState, useEffect} from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

export function ZoneSelect({getZone}) {
  const [zone, setZone] = useState('')

  const handleChange = (event) => {
    setZone(event.target.value)
    getZone(event.target.value)
  }

  useEffect(() => {
    console.log(zone)
  })

  return (
    <FormControl variant="filled" sx={{
      m: 1,
      minWidth: 325,
      maxWidth: 325,
      '& .css-hum04-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {color: '#32C791'},
      '& .css-1dq8qbs-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root:after': {borderBottomColor: '#32C791'},
      '& .css-hum04-MuiFormLabel-root-MuiInputLabel-root': {fontFamily: "NISEJsrf"},
      '& .css-1mxeotk-MuiFormLabel-root-MuiInputLabel-root': {fontFamily: "NISEJsrf"}
      
      }}>
        <InputLabel id="demo-simple-select-filled-label">Zone</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={zone}
          onChange={handleChange}
        >
          <MenuItem value=""><em>-</em></MenuItem>
          <MenuItem value='633ef81dfda6684bb06e27b4'>Dogenzaka Hill</MenuItem>
          <MenuItem value='633efa98fda6684bb06e27b5'>Shibuya Terminal</MenuItem>
          <MenuItem value='633efd07fda6684bb06e27b7'>Chuo Street</MenuItem>
          <MenuItem value='633efd96fda6684bb06e27ba'>Hikage Street</MenuItem>
          <MenuItem value='633efe2cfda6684bb06e27bc'>Rokkkaku-Dai Heights</MenuItem>
          <MenuItem value='633eff18fda6684bb06e27be'>Tokyo Underground Sewage Facility</MenuItem>
          <MenuItem value='633f002efda6684bb06e27c0'>Bottom Point of the Sewage Facility</MenuItem>
          <MenuItem value='633f00c4fda6684bb06e27c2'>Kibogaoka Hill</MenuItem>
          <MenuItem value='633f012afda6684bb06e27c4'>Fortified Residential Zone</MenuItem>
          <MenuItem value='633f01a0fda6684bb06e27c6'>99th Street</MenuItem>
          <MenuItem value='633f0206fda6684bb06e27c8'>Skyscraper District and Pharaoh Park</MenuItem>
          <MenuItem value='633f028bfda6684bb06e27ca'>Highway Zero</MenuItem>
          <MenuItem value='633f0321fda6684bb06e27cc'>Sky Dinosaurian Square</MenuItem>
        </Select>
      </FormControl>
  );
}