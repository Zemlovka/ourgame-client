import { Button } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const CustomCircleButton = styled((Button))(
  ({ theme , ...props
     }) =>
({
      
      ...(props.isTransparent &&
            {
                  border: "2px solid "+theme.palette.primary.main,
                  color:theme.palette.primary.main,
                  ":hover": 
                  {
                        border: "3px solid "+theme.palette.button.hovered,
                        color:theme.palette.button.hovered,
                  },
                  ":active": 
                  {
                        border: "3px solid "+theme.palette.button.pressed,
                        color:theme.palette.button.pressed,
                  }
            }),

      ...(!props.isTransparent &&
            {
                  backgroundColor: props.backgroundColor? props.backgroundColor:theme.palette.button.main,
                  color: theme.palette.text.main,
                  ":hover": 
                  {
                        backgroundColor: theme.palette.button.hovered,
                  },
                  ":active": 
                  {
                        backgroundColor: theme.palette.button.pressed,
                  }
            }),      

      minWidth: props.diameter? props.diameter : "32px",  
      maxWidth: props.diameter? props.diameter : "32px", 
      minHeight: props.diameter? props.diameter : "32px",  
      maxHeight: props.diameter? props.diameter : "32px", 
      borderRadius: "50%",
      fontSize: props.fontSize? props.fontSize : "auto",

}));




export default CustomCircleButton;