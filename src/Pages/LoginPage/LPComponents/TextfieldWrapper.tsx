import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useField } from "formik";
import { useState } from "react";

type TextfieldWrapperProps = { name: string; otherProps?: TextFieldProps };

function TextfieldWrapper({
  name,
  ...otherProps
}: Readonly<TextfieldWrapperProps>) {
  const [field, meta] = useField(name);
  const [myVar,setMyVar] = useState(false);
  const handlePasswordVisibility = () =>{
    setMyVar(prev => !prev)
  }

  const configOption: TextFieldProps = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    
  };

  if (meta && meta.touched && meta.error) {
    configOption.error = true;
    configOption.helperText = meta.error;
  }
  return (
    <TextField
      {...configOption}
      type={ myVar ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handlePasswordVisibility}>
              {myVar ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextfieldWrapper;
