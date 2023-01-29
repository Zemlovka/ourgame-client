import { TextField } from "@mui/material";
import {styled, withTheme } from "@mui/material/styles";

const SearchTextField = styled((TextField))(
  ({ theme }) =>
({

  minWidth: "120px",
  width: "100%",
 
  ".MuiOutlinedInput-root":
  {
    borderRadius: "10px",
  },
  "fieldset":
  {
    border: "2px solid "+ theme.palette.primary.main,
  },
  "input:valid:hover + fieldset":
  {
    border: "3px solid "+theme.palette.interactive.hovered,
  },
  "input:valid:focus:not(:hover) + fieldset":
  {
    border: "3px solid "+theme.palette.primary.main,
  },

  // LABEL
  "label":
  {
    color: theme.palette.primary.main,
  },
  ":hover label":
  {
    color: theme.palette.interactive.hovered,
  },
  ".MuiInputLabel-shrink":
  {
    color: theme.palette.primary.main,
  },
  ":hover span":
  {
    margin: "0 2px",
  },
  ":hover .MuiInputLabel-shrink":
  {
    fontWeight: "bold",
  },

}));




export default SearchTextField;