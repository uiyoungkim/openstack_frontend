import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

/*
 We are only using the Button component for the whole project. 
 How to Use: 
 1.  Import the Button component from the MUI library.
 2. Use the Button component with the following props:
    - onClick: Function
    - label: String
  3. Customize the Button component with the sx prop.

  simple Example:  
   <RoundedButton
      label="Anmelden"
      onClick={() => console.log("Anmelden geklickt")}
   />
*/

const RoundedButton = ({ label, onClick }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,
        borderRadius: "50px",
        paddingX: 4,
        paddingY: 1.5,
        textTransform: "none",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default RoundedButton;
