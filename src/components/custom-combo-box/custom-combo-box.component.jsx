import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const CustomComboBox=({label,...allProps})=> {
    return(
    <Autocomplete
      {...allProps}
      size='small'
      style={{ width: 200 }}
      renderInput={(params) => <TextField {...params} 
      InputLabelProps={{
        shrink: true,
      }} label={label} variant="filled" />}
    />
  );}
  export default CustomComboBox;



