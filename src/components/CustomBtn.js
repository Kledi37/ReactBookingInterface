import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#c6505a",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #2f142f",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#ee9c5d"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

export default function CustomBtn(props) {
  return (
    <div>
      <StyledButton>{props.txt}</StyledButton>
    </div>
  )
}
