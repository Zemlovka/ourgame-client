import { Button } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const CustomButton = styled((Button))(
  ({ theme , ...props /* Тут Атрибуты  */
     }) =>
({

      /* Если Атрибут есть - значение атрибута, иначе другое...  */
      backgroundColor: props.backgroundColor? props.backgroundColor : theme.palette.button.main,
      borderRadius: props.borderRadius? props.borderRadius : "10px",
      color: theme.palette.text.main,
      width: props.width? props.width : "100%",
      height: "2rem",
      padding: "0",
      textTransform: props.isUppercase? "uppercase" : "capitalize",

      /* Условные стили  */
      /*
      ...(props.isTrue &&
                  {
                        СТИЛИ
                  }),
      */


      ":hover": 
      {
            backgroundColor: theme.palette.button.hovered,
      },
      ":active": 
      {
            backgroundColor: theme.palette.button.pressed,
      }
}));




export default CustomButton;