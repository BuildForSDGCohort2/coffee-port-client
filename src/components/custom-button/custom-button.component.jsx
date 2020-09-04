import React from "react"
import Button from '@material-ui/core/Button';


const CustomButton=({...otherProps})=>{
    return   <Button
   {...otherProps}
   
  >
    Sign Up
  </Button>
}
export default CustomButton;